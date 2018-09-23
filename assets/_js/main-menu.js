const mobileNavigation = () => {
  const menuTrigger = document.getElementById('nav-trigger')
  const menuTriggerLabel = document.getElementById('nav-trigger-label')
  const menuLabelOpen = menuTriggerLabel.getAttribute('data-label-open')
  const menuLabelClose = menuTriggerLabel.getAttribute('data-label-close')

  menuTrigger.addEventListener('change', function() {
    if (menuTrigger.checked) {
      document.body.classList.add('menu-open')
      menuTriggerLabel.innerHTML = menuLabelClose
    } else {
      document.body.classList.remove('menu-open')
      menuTriggerLabel.innerHTML = menuLabelOpen
    }
  })
}

export default mobileNavigation
