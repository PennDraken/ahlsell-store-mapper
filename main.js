document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#inventoryTable tbody");
    const searchBar = document.getElementById("searchBar");

    const mainContainer = document.querySelector("main");

    function debounce(func, delay) { // Used to debounce sidebar resizing
        let timeout;
        return (...args) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    }

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

        // Render in background if idle, otherwise just use setTimeout
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
                if (fragment.childElementCount > 100) {
                    break;
                }
            }

            tbody.appendChild(fragment);
        };

        if ('requestIdleCallback' in window) {
            requestIdleCallback(render);
        } else {
            setTimeout(render, 0);
        }
    }

    searchBar.addEventListener("input", () => {
        const value = searchBar.value;

        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            currentFilter = value;
            renderInventory(currentFilter);
        }, 40);
    });

    renderInventory();
});
