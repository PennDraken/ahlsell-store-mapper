document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#inventoryTable tbody");
    const searchBar = document.getElementById("searchBar");
    const sidebar = document.getElementById("sidebar");
    const mainContainer = document.querySelector("main");

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

        // Set of unique locations
        // debugger
        const uniqueLocations = new Set(results.map(item => inventoryShelfToShelfId(item.location.toUpperCase(), shelves)));
        console.log(uniqueLocations)
        drawShelfMap(uniqueLocations);

        // Render in background if idle, otherwise just use setTimeout
        const render = () => {
            const fragment = document.createDocumentFragment();
            for (const item of results) {
                const row = document.createElement("tr");
                let color = "#b0a8d2ff";
                if (item.location[0]=="E") {
                    color = colors.el;
                } else if (item.location[0]=="M") {
                    color = colors.verktyg;
                } else if (item.location[0]=="V") {
                    color = colors.vvs;
                } else if (item.location[0]=="P") {
                    color = colors.psu;
                }
                row.innerHTML = `
                    <td id="location-cell" style="background-color: ${color};">${item.location}</td>
                    <td id="name-cell">${item.name1}</td>
                    <td>${item.name2}</td>
                    <td>${item.article_number}</td>
                    `;
                fragment.appendChild(row);
                if (fragment.childElementCount > 300) {
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
