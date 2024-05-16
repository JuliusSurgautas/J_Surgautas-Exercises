const book = {
    title: "Metamorfozė",
    author: "Francas Kafka",
    pageCount: 31
};

function printBookInfo(book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Page Count: " + book.pageCount);
}

printBookInfo(book);