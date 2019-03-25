SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<a href="{relative_url}"><li class="list-group-item">{title}</li></a>',
    noResultsText: `<p>No results found.</p>`
})