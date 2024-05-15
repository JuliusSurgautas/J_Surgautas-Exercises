document.getElementById("formButton").addEventListener("click", function () {
    const enteredText = document.getElementById("textBox").value.trim();
    const messageElement = document.getElementById("message");

    if (enteredText !== '') {
        messageElement.textContent = "Text you entered: " + enteredText;
    } else {
        messageElement.textContent = "Enter text before displaying message";
    };
});