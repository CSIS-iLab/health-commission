const siteHeader = () => {
  const header = document.querySelector('.site-header')
  const header_height = header.offsetHeight
  const minimal_class = 'site-header--minimal'
  const trigger_minimal_class = 'site-header--trigger-minimal'
  const add_class_on_scroll = classes => header.classList.add(classes)
  const remove_class_on_scroll = classes => header.classList.remove(classes)
  const visibleNavDelta = 5
  const hiddenNavClass = 'site-header--hidden'
  const postBar = document.querySelector('.site-header__post')
  const postContent = document.querySelector('.post__content')
  const headerNav = document.querySelector('.site-nav')
  const headerSearch = document.querySelector('.site-header__search')
  const hiddenPostBarClass = 'is-hidden'
  const visibilePostBarClass = 'is-visible'

  let scrollPos = window.scrollY
  let lastScrollPos = 0
  let doHideHeader = false
  let postContentTop

  if (postContent) {
    postContentTop = postContent.getBoundingClientRect().top - header_height
  }

  if (window.scrollY > 0) {
    doHideHeader = true
    add_class_on_scroll(minimal_class)
    remove_class_on_scroll(trigger_minimal_class)
  }

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

    if (postBar) {
      if (scrollPos > postContentTop) {
        showPostBar()
      } else {
        hidePostBar()
      }
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

        if (postBar) {
          hidePostBar()
        }
      }
    }

    lastScrollPos = scrollPos
  })

  function showPostBar() {
    postBar.classList.add(visibilePostBarClass)
    headerSearch.classList.add(hiddenPostBarClass)
    headerNav.classList.add(hiddenPostBarClass)
  }

  function hidePostBar() {
    postBar.classList.remove(visibilePostBarClass)
    headerSearch.classList.remove(hiddenPostBarClass)
    headerNav.classList.remove(hiddenPostBarClass)
  }
}

export default siteHeader
