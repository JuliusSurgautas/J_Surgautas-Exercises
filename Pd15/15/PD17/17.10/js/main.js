function sortAscending() {
    let ulList = document.getElementById("ul-list");
    let listElements = Array.from(ulList.getElementsByTagName("li"));

    listElements.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    ulList.innerHTML = "";
    listElements.forEach(function (element) {
        ulList.appendChild(element);
    });
};

function sortDescending() {
    let ulList = document.getElementById("ul-list");
    let listElements = Array.from(ulList.getElementsByTagName("li"));

    listElements.sort(function (a, b) {
        return b.textContent.localeCompare(a.textContent);
    });

    ulList.innerHTML = "";
    listElements.forEach(function (element) {
        ulList.appendChild(element);
    });
};