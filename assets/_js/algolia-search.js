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
  const searchParameters = {
    hitsPerPage: 10
  }
  const archiveEl = document.querySelector('.archive')
  const dataFacet = archiveEl.getAttribute('data-facet')
  const dataFacetValue = archiveEl.getAttribute('data-facet-value')
  if (dataFacet && dataFacetValue) {
    searchParameters.facetFilters = [`${dataFacet}: ${dataFacetValue}`]
  }

  const elementsToHideNoResults = document.querySelectorAll(
    '.pagination--hide-no-results'
  )

  let search = instantsearch({
    appId: '7UNKAH6RMH',
    apiKey: 'b9011cf7f49e60630161fcacf0e37d02',
    indexName: 'health-commission',
    urlSync: true,
    searchParameters
  })

  search.addWidget(
    hits({
      container: '#hits',
      templates: {
        item: hit => {
          return `${hit.post_html}`
        },
        empty: `<h2 class="section-title">Nothing Found</h2>
          <p>Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
          <a href="." class="btn">Clear All Filters</a>`
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
      container: '#pagination',
      showFirstLast: false,
      labels: {
        previous: '<i class="icon-arrow-left"></i>Previous',
        next: 'Next<i class="icon-arrow-right"></i>'
      }
    })
  )

  if (document.querySelector('.archive--search')) {
    search.addWidget(
      searchBox({
        container: '#search-input',
        queryHook: function(query, search) {
          updateSearchTitle(query)
          search(query)
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

    search.on('render', () => {
      let title = search.searchParameters.query

      if (
        !title &&
        search.searchParameters.hasOwnProperty('disjunctiveFacetsRefinements')
      ) {
        let facets = Object.keys(
          search.searchParameters.disjunctiveFacetsRefinements
        )

        facets.forEach(
          facet =>
            (title =
              search.searchParameters.disjunctiveFacetsRefinements[facet][0])
        )
      }

      if (!title) {
        return
      }

      if (search.helper.lastResults.nbHits == 0) {
        toggleElementsOnNoResults(elementsToHideNoResults, 'add')
      } else {
        toggleElementsOnNoResults(elementsToHideNoResults, 'remove')
      }

      updateSearchTitle(title)
    })
  }

  search.start()
}

function toggleElementsOnNoResults(elements, action) {
  elements.forEach(el => el.classList[action]('pagination--is-hidden'))
}

function updateSearchTitle(query) {
  const queryText = document.querySelector('.page-header__title span')

  if (!query) {
    queryText.innerHTML = ''
    return
  }
  queryText.innerHTML = query
}

export default AlgoliaSearch
