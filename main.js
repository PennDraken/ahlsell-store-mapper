document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#inventoryTable tbody");
    const searchBar = document.getElementById("searchBar");

    let currentFilter = "";
    let debounceTimeout = null;

    function getImageURL(article_number) {
        // Example URL calls. Note many articles will not show up using this method.
        // https://www.ahlsell.se/external-assets/JPEGlarge800_800/25/16/ProductImage75172516.jpg?preset=medium
        // https://www.ahlsell.se/external-assets/JPEGlarge800_800/_5/66/7201_1_566.jpg?preset=medium
        const lastDigitsPart1 = article_number.substring(article_number.length - 4, article_number.length - 2)
        const lastDigitsPart2 = article_number.substring(article_number.length - 2, article_number.length)
        return "https://www.ahlsell.se/external-assets/JPEGlarge800_800/" + lastDigitsPart1 + "/" + lastDigitsPart2 + "/ProductImage" + article_number + ".jpg?preset=medium"
    }
    
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
                const imageURL = getImageURL(article_number);
                row.innerHTML = `
                    <td id="location-cell">${item.location}</td>
                    <td><img src="${imageURL}" alt="" border=3 height=30></img></th>
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
