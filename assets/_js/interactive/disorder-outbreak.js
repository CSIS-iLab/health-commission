import Highcharts from '../../../node_modules/highcharts/highmaps'
import hcData from '../../../node_modules/highcharts/modules/data'
import motion from './globals/motion'
import geoData from './globals/world.json'
hcData(Highcharts)

motion()

const threshold = 1000
let dataObj = { base: [], points: [], labels: [] },
  currentYear

Highcharts.data({
  googleSpreadsheetKey: '1lss8rBHn7TmYaXbw1S6AAyb0ZOAlaTB1LeeP87D4Zsw',
  googleSpreadsheetWorksheet: 1,
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    columns.forEach(function(a, i) {
      if (i === 0) {
        dataObj.labels = a.filter(c => parseInt(c, 10))
        return
      }

      dataObj.labels.forEach(function(year, index) {
        let tileData = geoData.features.find(function(country) {
          return country.properties['iso-a3'].indexOf(a[0]) > -1
        })

        if (!tileData) return

        let countryData = dataObj.base.find(function(d) {
          return d['iso-a3'] === a[0]
        })

        if (countryData) {
          mapFragilityYearsToSequence(countryData, a, index, year)
        } else {
          let country = {}
          country['hc-key'] = tileData.properties['hc-key']
          country['iso-a3'] = a[0]

          mapFragilityYearsToSequence(country, a, index, year)
          dataObj.base.push(country)
        }
      })
    })

    Highcharts.data({
      googleSpreadsheetKey: '144508dI92hTtIm5wp4OcQMeRP5ViuUpPv2ufvOOLaS0',
      googleSpreadsheetWorksheet: 1,
      switchRowsAndColumns: true,
      parsed: function parsed(columns) {
        columns.forEach(function(b, i) {
          if (i === 0) {
            return
          }

          let countryPointData = dataObj.points.find(function(d) {
            return d['name'] === b[0]
          })

          if (countryPointData) {
            mapOutbreakYearsToSequence(countryPointData, b)
          } else {
            let countryPoint = {}

            countryPoint.sequence = dataObj.labels.map(function(year) {
              return {
                value: null,
                year
              }
            })

            countryPoint['name'] = b[0]
            countryPoint['lat'] = b[1]
            countryPoint['lon'] = b[2]

            mapOutbreakYearsToSequence(countryPoint, b)

            dataObj.points.push(countryPoint)
          }
        })

        renderMap(dataObj)
      }
    })
  }
})

function assignValue(cases) {
  switch (true) {
    case Number.isNaN(cases):
      return null
    case cases < threshold:
      return threshold
    case cases > threshold:
      return cases
  }
}

function mapFragilityYearsToSequence(country, a, index, year) {
  let value = parseInt(a[index + 2], 10) > -1 ? a[index + 2] : null

  country.sequence = country.sequence || []
  if (parseInt(year, 10)) {
    country.sequence.push({ year: year, value: value })
  }
  country[a[1]] = country[a[1]] || []

  country[a[1]].push(value)
}

function mapOutbreakYearsToSequence(country, b) {
  let yearColumn = b[4].toString().split('-')
  let yearOne = yearColumn[0]

  if (yearColumn.length == 2) {
    let length = parseInt(yearColumn[1], 10) - parseInt(yearColumn[0], 10)

    for (let i = 0; i <= length; i++) {
      let pointIndex = dataObj.labels.indexOf(parseInt(yearOne, 10) + i)

      updateSequence(country, pointIndex, b)
    }
  } else {
    let pointIndex = dataObj.labels.indexOf(parseInt(yearOne, 10))

    updateSequence(country, pointIndex, b)
  }
  return country
}

function updateSequence(country, index, b) {
  let value = assignValue(parseInt(b[6], 10))
  let tooltipValue = parseInt(b[6], 10) > -1 ? b[6] : null

  country.sequence[index] = country.sequence[index] || {}

  if (country.sequence[index].value) {
    country.sequence[index].value += value ? value : 0
    country.sequence[index].tooltipValue += tooltipValue ? tooltipValue : 0
  } else {
    country.sequence[index].value = value ? value : null
    country.sequence[index].tooltipValue = tooltipValue ? tooltipValue : null
  }

  country.sequence[index].diseases = country.sequence[index].diseases || []
  country.sequence[index].diseases.push({
    disease: b[5],
    cases: tooltipValue,
    notes: [b[7], b[8]].filter(function(d) {
      return d
    })
  })
  country.sequence[index].year = parseInt(dataObj.labels[index], 10)
}

function renderMap(data) {
  data.points.push({
    x: NaN,
    y: NaN,
    lat: NaN,
    lon: NaN,
    name: '',
    sequence: data.labels.map(function(year) {
      return {
        value: 1250000,
        year
      }
    })
  })

  Highcharts.mapChart('disorder-outbreak__graphic', {
    chart: {
      marginTop: 0,
      marginBottom: 25,
      height: 600,
      backgroundColor: '#e3eaec'
    },
    title: {
      text: ''
    },

    credits: {
      enabled: true,
      href: true,
      style: {
        color: 'black',
        cursor: 'default'
      }
    },
    legend: {
      enabled: false,
      layout: 'horizontal',
      verticalAlign: 'top',
      floating: false,
      x: -133
    },
    colorAxis: {
      dataClasses: [
        {
          to: 60,
          color: '#D0DADF'
        },
        {
          from: 60,
          to: 75,
          color: '#AFBFC9'
        },
        {
          from: 75,
          to: 90,
          color: '#758896'
        },
        {
          from: 90,
          to: 105,
          color: '#526774'
        },
        {
          from: 105,
          color: '#304854'
        }
      ]
    },

    series: [
      {
        data: data.base,
        name: 'choropleth',
        mapData: geoData,
        joinBy: ['hc-key', 'hc-key'],
        borderWidth: 1,
        showInLegend: false,
        nullColor: '#D0DADF',
        borderColor: '#ffffff',
        borderOpacity: 0.2,
        states: {
          hover: {
            brightness: 0
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      {
        data: data.points,
        name: 'bubbles',
        type: 'mapbubble',
        maxSize: '25%',
        minSize: '3px',
        sizeBy: 'area',
        color: '#f26522',
        states: {
          inactive: {
            opacity: 1
          }
        }
      }
    ],
    mapNavigation: {
      enabled: true,
      enableMouseWheelZoom: false,
      buttonOptions: {
        verticalAlign: 'top',
        align: 'right',
        theme: {
          fill: '#f26522',
          'stroke-width': 0,
          stroke: '#f26522'
        },
        style: {
          color: 'white',
          fontWeight: 'bold',
          textShadow:
            '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;'
        }
      },
      buttons: {
        zoomIn: {
          y: 0
        },
        zoomOut: {
          y: 33
        }
      }
    },
    exporting: {
      enabled: false
    },
    tooltip: {
      headerFormat: '',
      useHTML: true,
      pointFormatter: pointFormatter,
      nullFormatter: pointFormatter,
      style: { fontFamily: '"europa",sans-serif' }
    },

    motion: {
      enabled: true,
      labels: data.labels,
      series: [0, 1],
      startIndex: data.labels.indexOf(2018),
      updateInterval: 1250,
      axisLabel: 'year',
      magnet: {
        round: 'floor',
        step: 1
      }
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            chart: {
              height: '33%'
            },

            credits: {
              text: 'CSIS | WHO | Fund for Peace |  '
            }
          }
        },
        {
          condition: {
            minWidth: 401,
            maxWidth: 700
          },
          chartOptions: {
            chart: {
              height: '50%'
            },

            credits: {
              align: 'right',
              text: 'CSIS | WHO | Fund for Peace |  '
            }
          }
        },
        {
          condition: {
            minWidth: 701
          },
          chartOptions: {
            credits: {
              text:
                'CSIS Global Health Policy Center | World Health Organization | Fund for Peace | '
            }
          }
        }
      ]
    }
  })

  let resizeEvent = window.document.createEvent('UIEvents')
  resizeEvent.initUIEvent('resize', true, false, window, 0)
  window.dispatchEvent(resizeEvent)
}

function pointFormatter() {
  let point = this
  currentYear = document.querySelector('.label.active').dataset.id

  currentYear = parseInt(currentYear, 10)
  let index = currentYear - 2006

  let fragilityData = this.series.chart.series.find(function(s) {
    return s.name === 'choropleth'
  }).data

  let fragilityCountry = fragilityData.find(function(d) {
    return d.id === point.id || d.name === point.name
  })

  let fragilityValue = fragilityCountry
    ? fragilityCountry.sequence[index].value
    : null

  let color = fragilityCountry ? fragilityCountry.color : null
  let rgb = hexToRgb(color)

  let outbreakData = this.series.chart.series.find(function(s) {
    return s.name === 'bubbles'
  }).data

  let outbreakCountry = outbreakData.find(function(d) {
    return d.name === point.name
  })

  let outbreakValue = outbreakCountry
    ? outbreakCountry.sequence[index].tooltipValue
    : null

  let outbreakDiseases = outbreakCountry
    ? outbreakCountry.sequence[index].diseases
    : null

  let outbreakNotes =
    outbreakCountry && outbreakDiseases
      ? outbreakDiseases
          .map(function(d) {
            return d.notes
          })
          .reduce(function(a, b) {
            return a.concat(b)
          })
      : []

  let table = ''

  table += '<table>'
  table += '<thead>'
  table += '<tr>'
  table += '<td colspan="2">' + this.name + ' (' + currentYear + ')' + '</td>'
  table += '</tr>'
  table += '</thead>'
  table += '<tbody>'

  if (fragilityValue) {
    let lightColors = ['#AFBFC9', '#D0DADF']

    table +=
      '<tr class="section section-fragility" style="' +
      (lightColors.indexOf(color) > -1 ? ';color:black' : '') +
      '">'
    table += '<td style="background-color:' + color + '">Fragility Score</td>'
    table +=
      '<td style="background-color:rgba(' +
      rgb +
      ',.67)">' +
      fragilityValue +
      '</td>'
    table += '</tr>'
  }

  if (outbreakValue) {
    table += '<tr class="section section-outbreak">'
    table += '<td>Outbreaks</td>'
    table += '<td>Suspected Cases</td>'
    table += '</tr>'

    let outbreakRows = outbreakDiseases
      .map(function(o) {
        return (
          '<tr>' +
          '<td>' +
          o.disease +
          '</td>' +
          '<td>' +
          (o.cases ? o.cases.toLocaleString() : '') +
          '</td>' +
          '</tr>'
        )
      })
      .join('')

    table += outbreakRows

    table += '<tr>'
    table += '<td><strong>' + outbreakDiseases.length + ' total</strong></td>'
    table +=
      '<td><strong>' + outbreakValue.toLocaleString() + ' total</strong></td>'
    table += '</tr>'
    table += '</tbody>'

    if (outbreakNotes.length) {
      table += '<tfoot>'

      let notes = outbreakNotes
        .map(function(o) {
          return '<tr><td colspan="2">' + o + '</td></tr>'
        })
        .join('')

      table += notes

      table += '</tfoot>'
    }
  }
  table += '</table>'

  return table
}

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  result = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
  return result ? result.r + ',' + result.g + ',' + result.b : null
}
