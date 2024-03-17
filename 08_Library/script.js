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
});

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
    card.classList.add("card");
    shelve.appendChild(card);

    //add delete button
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.classList.add("delete-button");
    card.appendChild(deletebutton);
    deletebutton.setAttribute("data-book", myLibrary.indexOf(book));

    //add toggle read/unread status

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

function removeCardDIV() {
  let allCard = document.querySelectorAll(".card");
  allCard.forEach((card) => {
    if (card) {
      card.remove();
    }
  });
}

//delete button to remove book
function deleteBook(indexNumber) {
  let deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((button) => {
    button.addEventListener("click", function () {
      indexNumber = button.dataset.book;
      myLibrary.splice(indexNumber, 1);
      removeCardDIV();
      createCardDIV();
      deleteBook();
    });
  });
}

//toggle read status
