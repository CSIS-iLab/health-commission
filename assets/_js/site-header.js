const siteHeader = () => {
  let scrollpos = window.scrollY
  const header = document.querySelector('.site-header')
  const header_height = header.offsetHeight
  const header_class = 'site-header--minimal'
  const add_class_on_scroll = () => header.classList.add(header_class)
  const remove_class_on_scroll = () => header.classList.remove(header_class)

  window.addEventListener('scroll', function() {
    scrollpos = window.scrollY
    if (scrollpos >= header_height) {
      add_class_on_scroll()
    } else {
      remove_class_on_scroll()
    }
  })
}

export default siteHeader
