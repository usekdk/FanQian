// 简单的搜索实现
fetch('/search.json')
  .then(response => response.json())
  .then(data => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      const results = data.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.toLowerCase().includes(query)
      );
      
      if (results.length > 0) {
        searchResults.innerHTML = results.map(item => `
          <div class="search-result-item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <a href="${item.download}" target="_blank">下载</a>
          </div>
        `).join('');
      } else {
        searchResults.innerHTML = '<p>未找到相关软件</p>';
      }
    });
  });
