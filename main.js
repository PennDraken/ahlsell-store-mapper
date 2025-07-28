document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#inventoryTable tbody");
    const searchBar = document.getElementById("searchBar");


    const resizer = document.getElementById("resizer");
    const sidebar = document.getElementById("sidebar");
    const mainContainer = document.querySelector("main");

    let isResizing = false;

    function debounce(func, delay) { // Used to debounce sidebar resizing
        let timeout;
        return (...args) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    }

    resizer.addEventListener("mousedown", e => {
        isResizing = true;
        document.body.style.cursor = "col-resize";
    });

    const resizeSidebar = debounce((clientX) => {
        const containerWidth = mainContainer.offsetWidth;
        const newSidebarWidth = containerWidth - clientX;
        // tbody.innerHTML = ""; // Remove while moving
        if (newSidebarWidth > 150 && newSidebarWidth < containerWidth - 100) { // TODO remove hard coded magic values
            sidebar.style.width = `${newSidebarWidth}px`;
        }
    }, 100);

    document.addEventListener("mousemove", e => {
        if (!isResizing) return;
        resizeSidebar(e.clientX);
    });

    document.addEventListener("mouseup", () => {
        if (isResizing) {
            renderInventory()
        }
        isResizing = false;
        document.body.style.cursor = "default";
    });

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
