const myLibrary = [
  {
    title: "book1",
    author: "author1",
    pages: "11",
    status: "done",
  },
  {
    title: "book2",
    author: "author2",
    pages: "22",
    status: "done",
  },
  {
    title: "book3",
    author: "author3",
    pages: "33",
    status: "done",
  },
];
// const bookDetails = ["title", "author", "pages", "status"];

// const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    //The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
    return title + " by " + author + ", " + pages + " pages, " + status;
  };
}

//Book("Cinderella", "Writer", 44, "Finish reading");

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let status = document.getElementById("status");
  let book = new Book(title.value, author.value, pages.value, status.value);
  myLibrary.push(book);
}

let submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", addBookToLibrary);

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset(); // Clears the form
});

//add book to DOM----------------------

const bookDetails = ["title", "author", "pages", "status"];
let shelve = document.querySelector(".shelve");

//create card and book for each array index
function createCardDIV() {
  myLibrary.forEach((book) => {
    let bookNumber = "book" + myLibrary.indexOf(book);
    let card = document.createElement("div");
    card.setAttribute("id", bookNumber);
    shelve.appendChild(card);
    //add book detail to each card
    bookDetails.forEach((detail) => {
      let DOM = document.createElement("div");
      DOM.setAttribute("class", detail);

      //add text to each DOM
      DOM.textContent = book[detail];
      card.appendChild(DOM);
    });
  });
}

function removeCardDIV() {}
