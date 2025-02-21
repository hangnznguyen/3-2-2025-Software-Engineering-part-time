const book = {
    "title" : "The rules of People",
    "description" : "A personal code for getting the best from everyone",
    "author" : "Richard Templar",
    "number of the pages": 223
}
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book["number of pages"]);
console.log(book);
book.description = "How to win the people's heart";

console.log(book);

let books = ["Psychology","Mathematic","English", "Geography", "Chemistry"];
console.log(books);