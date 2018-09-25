const headerSearch = () => {
  const searchBtn = document.querySelector('.btn--search')
  const searchBar = document.querySelector('.site-header__search-bar')
  const searchClose = document.querySelector('.btn--search-close')
  const searchInput = searchBar.querySelector('input')
  const triggers = [searchBtn, searchClose]

  triggers.forEach(element => {
    element.addEventListener('click', function() {
      searchBtn.classList.toggle('is-active')
      searchBar.classList.toggle('is-active')

      if (searchBar.classList.contains('is-active')) {
        searchInput.focus()
      }
    })
  })
}

export default headerSearch
