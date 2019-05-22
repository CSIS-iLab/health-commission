import highcharts from 'highcharts'

export default function() {
  // Initiates motion automatically if motion options object exists and
  // is not disabled
  highcharts.Chart.prototype.callbacks.push(function(chart) {
    if (chart.options.motion && chart.options.motion.enabled) {
      chart.motion = new Motion(chart)
    }
  })

  highcharts.Motion = Motion
}

// Sets up motion ready to use
function Motion(chart) {
  let motion = this

  this.chart = chart
  this.paused = true
  this.options = highcharts.merge(
    this.defaultOptions,
    this.chart.options.motion
  )
  this.dataSeries = []
  this.dataLength = 0
  motion.options.series = highcharts.splat(motion.options.series)
  highcharts.each(this.chart.series, function(series, index) {
    if (motion.options.series.indexOf(index) >= 0) {
      motion.dataSeries[index] = series
      for (let i = 0; i < series.data.length; i++) {
        if (series.data[i].sequence) {
          motion.dataLength = series.data[i].sequence.length
        }
      }
    }
  })

  this.playControls = highcharts.createElement(
    'div',
    {
      id: 'play-controls'
    },
    null,
    document.querySelector('.interactive__intro'),
    null
  )

  // Play/pause HTML-button
  this.playPauseBtn = highcharts.createElement(
    'button',
    {
      id: 'play-pause-button',
      title: 'play'
    },
    null,
    this.playControls,
    null
  )
  this.playPauseBtn.className = 'fa fa-play'

  this.range = highcharts.createElement(
    'div',
    {
      id: 'range'
    },
    null,
    this.playControls,
    null
  )

  // Play-range HTML-input
  this.playRange = highcharts.createElement(
    'input',
    {
      id: 'play-range',
      type: 'range',
      value: this.dataLength - 1,
      min: 0,
      max: this.dataLength - 1,
      step: this.options.magnet.step
    },
    null,
    this.range,
    null
  )
  // Play-range HTML-input
  this.ticks = highcharts.createElement(
    'div',
    {
      id: 'ticks'
    },
    null,
    this.range,
    null
  )
  this.labels = highcharts.createElement(
    'div',
    {
      id: 'labels'
    },
    null,
    this.range,
    null
  )

  this.playRange.value = this.chart.options.motion.startIndex

  for (let i = 0; i < this.options.labels.length - 1; i++) {
    this.ticks.innerHTML += `<div class="tick" style="flex-basis:${100 /
      (this.options.labels.length - 1)}%"></div>`
  }

  for (let i = 0; i < this.options.labels.length; i++) {
    this.labels.innerHTML += `<div data-id="${
      this.options.labels[i]
    }" class="label" style="flex-basis:${100 /
      (this.options.labels.length - 2)}%">${
      window.innerWidth > 768
        ? this.options.labels[i]
        : "'" + this.options.labels[i].toString().replace('20', '')
    }</div>`
  }

  // Common key event handler function
  function handleKeyEvents(e) {
    e = e || window.event
    switch (e.which) {
      case 32: // Space
        motion.togglePlayPause()
        break
      case 37: // Left
        motion.playRange.value = motion.round(
          parseFloat(motion.playRange.value) - 1
        )
        motion.updateChart(motion.playRange.value)
        break
      case 39: // Right
        motion.playRange.value = motion.round(
          parseFloat(motion.playRange.value) + 1
        )
        motion.updateChart(motion.playRange.value)
        break
      default:
        return
    }
    e.preventDefault()
  }

  // Bind controls to events
  highcharts.addEvent(this.playPauseBtn, 'click', function() {
    motion.togglePlayPause()
  })
  highcharts.addEvent(this.playRange, 'mouseup', function() {
    motion.attractToStep()
  })
  highcharts.addEvent(this.playRange, 'input', function() {
    motion.updateChart(this.value)
  })

  // Request focus to the controls when clicking on controls div
  highcharts.addEvent(this.playControls, 'click', function() {
    motion.playRange.focus()
  })
  // Bind keys to events
  highcharts.addEvent(this.playPauseBtn, 'keydown', handleKeyEvents)
  highcharts.addEvent(this.playRange, 'keydown', handleKeyEvents)

  // Initial value
  this.inputValue = parseFloat(this.playRange.value)

  // Initial update
  this.updateChart(this.inputValue)

  // Auto-play
  if (this.autoPlay) {
    this.play()
  }
}

// Default options for Motion
Motion.prototype.defaultOptions = {
  enabled: true,
  axisLabel: 'year',
  autoPlay: false,
  loop: false,
  series: 0,
  updateInterval: 1,
  magnet: {
    round: 'round',
    step: 0.01
  }
}

// Toggles between Play and Pause states, and makes calls to changeButtonType()
// From http://www.creativebloq.com/html5/build-custom-html5-video-player-9134473
Motion.prototype.togglePlayPause = function() {
  this[this.paused ? 'play' : 'pause']()
}

// Plays the motion, continuously updating the chart
Motion.prototype.play = function() {
  let motion = this
  if (
    (this.paused &&
      parseFloat(this.playRange.value) === parseFloat(this.playRange.max)) ||
    parseFloat(this.playRange.value) === this.chart.options.motion.startIndex
  ) {
    this.reset()
  }
  this.changeButtonType('pause')
  this.paused = false
  this.timer = setInterval(function() {
    motion.playUpdate()
  }, this.options.updateInterval)
}

// Pauses the motion, which stops updating the chart
Motion.prototype.pause = function() {
  this.changeButtonType('play')
  this.paused = true
  window.clearInterval(this.timer)
  this.attractToStep()
}

// Resets the motion and updates the chart. Does not pause
Motion.prototype.reset = function() {
  this.playRange.value = this.playRange.min
  this.updateChart(this.playRange.value)
}

// Updates a button's title, innerHTML and CSS class to a certain value
Motion.prototype.changeButtonType = function(value) {
  this.playPauseBtn.title = value
  this.playPauseBtn.className = value + ' fa fa-' + value
}

// Called continuously while playing
Motion.prototype.playUpdate = function() {
  if (!this.paused) {
    this.inputValue = parseFloat(this.playRange.value)
    this.playRange.value = this.inputValue + this.options.magnet.step
    this.attractToStep()
    this.updateChart(this.playRange.value) // Use playRange.value to get updated value
    if (this.playRange.value >= parseFloat(this.playRange.max)) {
      // Auto-pause
      if (this.options.loop) {
        this.reset()
      } else {
        this.pause()
      }
    }
  }
}

// Updates chart data and redraws the chart
Motion.prototype.updateChart = function(inputValue) {
  let seriesKey,
    series,
    point,
    roundedInput = this.round(inputValue),
    i
  if (this.currentAxisValue !== roundedInput) {
    this.currentAxisValue = roundedInput
    for (seriesKey in this.dataSeries) {
      if (this.dataSeries.hasOwnProperty(seriesKey)) {
        series = this.dataSeries[seriesKey]
        for (i = 0; i < series.data.length; i++) {
          point = series.data[i]
          try {
            if (point.sequence && point.sequence[roundedInput]) {
              point.update(point.sequence[roundedInput].value, false, false)
            }
          } catch (e) {
            console.error(
              'Error:',
              e,
              ' \nat point:',
              point,
              ' \nwith new value:'
            )
          }
        }
      }
    }
    this.attractToStep()
  }

  this.chart.redraw()
}

// Moves output value to data point
Motion.prototype.attractToStep = function() {
  let labels = Array.from(document.querySelectorAll('#play-controls .label'))

  labels.forEach(l => l.classList.remove('active'))

  let label = labels[this.round(this.playRange.value)]

  if (label) label.classList.add('active')
}

// Returns an integer rounded up, down or even depending on
// motion.magnet.round options.
Motion.prototype.round = function(number) {
  return Math[this.options.magnet.round](number)
}
