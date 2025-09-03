document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#inventoryTable tbody");
    const searchBar = document.getElementById("searchBar");
    const sidebar = document.getElementById("sidebar");
    const mainContainer = document.querySelector("main");

    let currentFilter = "";
    let debounceTimeout = null;

    function getImageURL(article_number) {
        // Example URL calls. Note many articles will not show up using this method.
        // https://www.ahlsell.se/external-assets/JPEGlarge800_800/25/16/ProductImage75172516.jpg?preset=medium
        // https://www.ahlsell.se/external-assets/JPEGlarge800_800/_5/66/7201_1_566.jpg?preset=medium
        const lastDigitsPart1 = article_number.substring(article_number.length - 4, article_number.length - 2)
        const lastDigitsPart2 = article_number.substring(article_number.length - 2, article_number.length)
        // return "https://www.ahlsell.se/external-assets/JPEGlarge800_800/" + lastDigitsPart1 + "/" + lastDigitsPart2 + "/ProductImage" + article_number + ".jpg?preset=medium"
        return "https://www.ahlsell.se/external-assets/JPEGlarge800_800/" + lastDigitsPart1 + "/" + lastDigitsPart2 + "/" + article_number + ".jpg?preset=medium"
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

        // Set of unique locations
        const uniqueLocations = new Set(results.map(item => inventoryShelfToShelfId(item.location.toUpperCase(), shelves)));
        drawShelfMap(uniqueLocations);

        // Render in background if idle, otherwise just use setTimeout
        const fragment = document.createDocumentFragment();
        let lastShelfLocation = null;
        let lastShelfRow = null;
        let elementsToHide = [];

        for (const item of results) {
            // Shelf number row
            if (item.location !== lastShelfLocation) {
                // Attach event listener to previous shelf row
                if (lastShelfRow !== null) {
                    const rowsToHide = [...elementsToHide]; // Capture the current rows in a new array
                    lastShelfRow.addEventListener("click", (e) => {
                        for (const elem of rowsToHide) {
                            if (elem.style.display === "none") {
                                elem.style.display = "table-row";
                            } else {
                                elem.style.display = "none";
                            }
                        }
                        console.log(rowsToHide);
                    });
                }

                // Create new shelf row
                const row = document.createElement("tr");
                let color = "#b0a8d2ff";
                if (item.location[0] == "E") {
                    color = colors.el;
                } else if (item.location[0] == "M") {
                    color = colors.verktyg;
                } else if (item.location[0] == "V") {
                    color = colors.vvs;
                } else if (item.location[0] == "P") {
                    color = colors.psu;
                }
                row.innerHTML = `
                    <td id="shelfId-cell" colspan="5" style="background-color: ${color};">${item.location}</td>
                `;
                fragment.appendChild(row);

                lastShelfLocation = item.location;
                lastShelfRow = row;

                elementsToHide = []; // Reset for new shelf
            }

            // Product information row
            const row = document.createElement("tr");
            let color = "#b0a8d2ff";
            if (item.location[0] == "E") {
                color = colors.el;
            } else if (item.location[0] == "M") {
                color = colors.verktyg;
            } else if (item.location[0] == "V") {
                color = colors.vvs;
            } else if (item.location[0] == "P") {
                color = colors.psu;
            }
            const imageURL = getImageURL(item.article_number);
            row.innerHTML = `
                <td id="location-cell" style="background-color: ${color};">${" "}</td>
                <td><img src="${imageURL}" alt="" width=100></img></th>
                <td id="name-cell">${item.name1}</td>
                <td>${item.name2}</td>
                <td id="article-number-cell">${item.article_number}</td>
            `;
            const articleNumberCell = row.querySelector("#article-number-cell");
            articleNumberCell.addEventListener("click", (e) => {
                navigator.clipboard.writeText(item.article_number);
            });
            const articleNameCell = row.querySelector("#name-cell");
            articleNameCell.addEventListener("click", (e) => {
                window.open("https://www.ahlsell.se/products/" + item.article_number, "_blank");
            });

            fragment.appendChild(row);
            elementsToHide.push(row);

            if (fragment.childElementCount > 100) {
                break;
            }
        }

        tbody.appendChild(fragment);
    }

    searchBar.addEventListener("input", () => {
        const currentFilter = searchBar.value;
        renderInventory(currentFilter);
    });

    renderInventory();
});
