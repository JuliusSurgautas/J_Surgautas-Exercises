function changeContent() {
    const newContent = document.getElementById("contentChange").value;
    const contentElement = document.getElementById("content");

    contentElement.textContent = newContent;
};