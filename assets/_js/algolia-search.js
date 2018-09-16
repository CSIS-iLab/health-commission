import instantsearch from 'instantsearch.js/dist/instantsearch'

const AlgoliaSearch = function() {
  let search = instantsearch({
    // Replace with your own values
    appId: '7UNKAH6RMH',
    apiKey: 'b9011cf7f49e60630161fcacf0e37d02', // search only API key, no ADMIN key
    indexName: 'health-commission',
    urlSync: true,
    searchParameters: {
      hitsPerPage: 10
    }
  })
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input'
    })
  )
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        // item: document.getElementById('hit-template').innerHTML,
        item: hit => {
          return `${hit.post_html}`
        },
        empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>'
      }
    })
  )
  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination'
    })
  )
  search.start()
}

export default AlgoliaSearch
