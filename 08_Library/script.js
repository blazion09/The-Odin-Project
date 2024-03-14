const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    //The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

//Book("Cinderella", "Writer", 44, "Finish reading");

function addBookToLibrary() {
  let title = prompt("What is the book title?");
  let author = prompt("What is the author name?");
  let book = {};
  book.title = title;
  book.author = author;
  myLibrary.push(book);
}
