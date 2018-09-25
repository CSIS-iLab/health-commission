const mobileNavigation = () => {
  const menuTrigger = document.getElementById('site-nav__trigger')
  // const menuTriggerLabel = document.getElementById('site-nav__label')
  const header = document.querySelector('.site-header')
  const trigger_minimal_class = 'site-header--trigger-minimal'

  menuTrigger.addEventListener('change', function() {
    if (menuTrigger.checked) {
      document.body.classList.add('menu-open')
      if (!header.classList.contains(trigger_minimal_class)) {
        return
      }
      header.classList.add('site-header--minimal')
    } else {
      document.body.classList.remove('menu-open')
      if (!header.classList.contains(trigger_minimal_class)) {
        return
      }
      header.classList.remove('site-header--minimal')
    }
  })
}

export default mobileNavigation
