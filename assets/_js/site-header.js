const siteHeader = () => {
  const header = document.querySelector('.site-header')
  const header_height = header.offsetHeight
  const minimal_class = 'site-header--minimal'
  const trigger_minimal_class = 'site-header--trigger-minimal'
  const add_class_on_scroll = classes => header.classList.add(classes)
  const remove_class_on_scroll = classes => header.classList.remove(classes)
  const visibleNavDelta = 5
  const hiddenNavClass = 'site-header--hidden'

  let scrollPos = window.scrollY
  let lastScrollPos = 0
  let doHideHeader = false

  window.addEventListener('scroll', function() {
    scrollPos = window.scrollY

    if (Math.abs(lastScrollPos - scrollPos) <= visibleNavDelta) {
      return
    }

    if (scrollPos >= header_height) {
      doHideHeader = true
      add_class_on_scroll(minimal_class)
      remove_class_on_scroll(trigger_minimal_class)
    } else {
      doHideHeader = false
      remove_class_on_scroll(minimal_class)
      remove_class_on_scroll(hiddenNavClass)
      add_class_on_scroll(trigger_minimal_class)
    }

    if (!doHideHeader) {
      return
    }

    if (scrollPos > lastScrollPos && scrollPos > header_height) {
      add_class_on_scroll(hiddenNavClass)
    } else {
      if (
        scrollPos +
        window.innerHeight +
        document.documentElement.scrollHeight
      ) {
        remove_class_on_scroll(hiddenNavClass)
      }
    }

    lastScrollPos = scrollPos
  })
}

export default siteHeader
