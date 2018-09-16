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
  let archiveEl = document.querySelector('.archive')
  let dataFacet = archiveEl.getAttribute('data-facet')
  let dataFacetValue = archiveEl.getAttribute('data-facet-value')
  let facetFilters = ''
  if (dataFacet && dataFacetValue) {
    facetFilters = `${dataFacet}: ${dataFacetValue}`
  }

  console.log(facetFilters)

  let search = instantsearch({
    appId: '7UNKAH6RMH',
    apiKey: 'b9011cf7f49e60630161fcacf0e37d02',
    indexName: 'health-commission',
    urlSync: true,
    searchParameters: {
      hitsPerPage: 10,
      facetFilters: [facetFilters]
    }
  })

  search.addWidget(
    hits({
      container: '#hits',
      templates: {
        item: hit => {
          return `${hit.post_html}`
        },
        empty: 'No results found.'
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
    pagination({
      container: '#pagination'
    })
  )

  if (document.querySelector('.archive--search')) {
    search.addWidget(
      searchBox({
        container: '#search-input'
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
  }

  search.start()
}

export default AlgoliaSearch
