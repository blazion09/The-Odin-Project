const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let status = getSelectedRadioValue();
  let book = new Book(title.value, author.value, pages.value, status);
  myLibrary.push(book);
}

function getSelectedRadioValue() {
  let readInput = document.getElementsByName("read");

  for (let i = 0; i < readInput.length; i++) {
    if (readInput[i].checked) {
      return readInput[i].value;
    }
  }
}

let submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", () => {
  addBookToLibrary();
  removeCardDIV();
  createCardDIV();
  deleteBook();
  toggleReadStatus();
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset(); // Clears the form
});

submitBtn.addEventListener("click", addLibraryToShelve);

function addLibraryToShelve() {
  myLibrary.forEach((book) => removeBookFromDOM(book));
  myLibrary.forEach((book) => {
    addBookToDOM(book);
  });
}

function removeBookFromDOM() {
  let bookTitle = document.querySelector(".book-title");
  let bookAuthor = document.querySelector(".book-author");
  if ((bookTitle, bookAuthor)) {
    bookTitle.remove();
    bookAuthor.remove();
  }
}

function addCardToDOM() {
  let shelve = document.querySelector(".shelve");
  let card = document.createElement("div");
  card.classList.add("card");
  shelve.appendChild(card);
}

function addBookToDOM(book) {
  addBookTitleToDOM(book);
  addBookAuthorToDOM(book);
}

function addBookTitleToDOM(book) {
  let shelve = document.querySelector(".shelve");
  let newBook = document.createElement("div");
  newBook.classList.add("book-title");
  shelve.appendChild(newBook);
  newBook.textContent = book.title;
}

function addBookAuthorToDOM(book) {
  let shelve = document.querySelector(".shelve");
  let newBook = document.createElement("div");
  newBook.classList.add("book-author");
  shelve.appendChild(newBook);
  newBook.textContent = book.author;
}
