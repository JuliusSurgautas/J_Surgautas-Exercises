function deleteFirstElement() {

    const listElement = document.getElementById("list");

    if (listElement.getElementsByTagName("li").length > 0) {
        let firstElement = listElement.getElementsByTagName("li")[0];
        firstElement.parentNode.removeChild(firstElement);
    } else {
        console.log("List is empty, nothing to delete.");
    };
};