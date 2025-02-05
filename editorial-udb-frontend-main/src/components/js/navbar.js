// search.js - Versión autónoma con datos incluidos
document.addEventListener('DOMContentLoaded', () => {
    // Constante con todos los datos de búsqueda
    const searchData = [
        {
            url: "/pages/revistas.html",
            title: "Revistas Científicas",
            content: "Publicaciones periódicas especializadas en ingeniería y ciencias sociales. Incluye investigaciones revisadas por pares.",
            category: "Investigación"
        },
        {
            url: "/pages/manuales.html",
            title: "Manuales Universitarios",
            content: "Guías prácticas para estudiantes de primer año con protocolos de laboratorio y metodologías de investigación.",
            category: "Educación"
        },
        {
            url: "/pages/colecciones.html",
            title: "Colecciones Especiales",
            content: "Compilaciones de trabajos destacados y publicaciones históricas de la universidad. Archivo desde 1950.",
            category: "Archivo"
        }
    ];

    // Configurar Lunr
    const searchIndex = lunr(function() {
        this.use(lunr.es);
        this.ref('url');
        this.field('title');
        this.field('content');

        searchData.forEach(doc => this.add(doc));
    });

    // Elementos del DOM
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    // Manejar búsqueda
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        const results = query.length > 2 ?
            searchIndex.search(query).map(result => {
                return {
                    ...result,
                    document: searchData.find(d => d.url === result.ref)
                };
            }) : [];

        displayResults(results);
    });

    // Mostrar resultados
    function displayResults(results) {
        resultsContainer.innerHTML = results
            .map(result => `
                <a href="${result.document.url}" class="search-result-item">
                    <div class="search-result-title">${result.document.title}</div>
                    <div class="search-result-category">${result.document.category}</div>
                    <div class="search-result-excerpt">${result.document.content.substring(0, 80)}...</div>
                </a>
            `)
            .join('');

        resultsContainer.style.display = results.length > 0 ? 'block' : 'none';
    }
});