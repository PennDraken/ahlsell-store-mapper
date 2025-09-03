document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#inventoryTable tbody");
    const searchBar = document.getElementById("searchBar");

    let currentFilter = "";
    let debounceTimeout = null;
    function renderInventory(filter = "") {
        const normalized = filter.toLowerCase();

        tbody.innerHTML = "";

        const results = inventory.filter(item =>
            item.article_number.toLowerCase().includes(normalized) ||
            item.name1.toLowerCase().includes(normalized) ||
            item.name2.toLowerCase().includes(normalized) ||
            item.location.toLowerCase().includes(normalized)
        );

        const render = () => {
            const fragment = document.createDocumentFragment();

            for (const item of results) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td id="location-cell">${item.location}</td>
                    <td id="name-cell">${item.name1}</td>
                    <td>${item.name2}</td>
                    <td>${item.article_number}</td>
                    `;
                fragment.appendChild(row);
                if (fragment.childElementCount > 100) { // Limit search results (avoid loading entire database) TODO allow user to search for more items
                    break;
                }
            }

            tbody.appendChild(fragment);
        };
    }

    searchBar.addEventListener("input", () => {
        const currentFilter = searchBar.value;
        renderInventory(currentFilter);
    });

    renderInventory(); // Initial population of articles
});
