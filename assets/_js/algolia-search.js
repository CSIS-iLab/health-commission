import instantsearch from 'instantsearch.js/es'
import {
  searchBox,
  hits,
  stats,
  pagination,
  refinementList,
  clearAll
} from 'instantsearch.js/es/widgets'
import breakpoints from './breakpoints'

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
    searchBox({
      container: '#search-input'
    })
  )
  search.addWidget(
    hits({
      container: '#hits',
      templates: {
        item: hit => {
          return `${hit.post_html}`
        },
        empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>'
      }
    })
  )
  search.addWidget(
    stats({
      container: '#stats-container',
      templates: {
        body: data => {
          let results_text = 'Results'
          if (data.hasOneResult) {
            results_text = 'Result'
          }
          let page = data.page + 1
          return `<strong>
            ${data.nbHits} ${results_text}</strong> &mdash;
            Page ${page} of ${data.nbPages}
          `
        }
      }
    })
  )
  search.addWidget(
    clearAll({
      container: '#filter__content-type-clear',
      excludeAttributes: ['themes'],
      templates: {
        link: 'All'
      },
      autoHideContainer: false,
      clearsQuery: false
    })
  )

  search.addWidget(
    refinementList({
      container: '#filter__content-type',
      attributeName: 'content_type',
      operator: 'or',
      limit: 10,
      sortBy: ['name:asc'],
      collapsible: {
        collapsed: breakpoints.isMobile()
      },
      templates: {
        header: 'Filter by Type',
        item: '{{ label }} ({{ count }})'
      }
    })
  )
  search.addWidget(
    refinementList({
      container: '#filter__themes',
      attributeName: 'themes',
      operator: 'or',
      limit: 10,
      sortBy: ['name:asc'],
      collapsible: {
        collapsed: true
      },
      templates: {
        header: 'Filter by Theme',
        item: '{{ label }} ({{ count }})'
      }
    })
  )
  search.addWidget(
    clearAll({
      container: '#filter__clear-all',
      templates: {
        link: 'Clear All'
      },
      autoHideContainer: false,
      clearsQuery: false
    })
  )
  search.addWidget(
    pagination({
      container: '#pagination'
    })
  )
  search.start()
}

export default AlgoliaSearch
