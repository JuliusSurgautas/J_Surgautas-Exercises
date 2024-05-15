function changeColor(color) {
    const paragraph = document.getElementsByTagName("p");

    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.color = color;
    };
};

changeColor("purple");