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

  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    return false;
  } else {
    myLibrary.push(book);
  }
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
    card.setAttribute("data-book", myLibrary.indexOf(book));

    //add delete button
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.classList.add("delete-button");
    deletebutton.setAttribute("data-book", myLibrary.indexOf(book));

    //add read/unread button
    let readButton = document.createElement("button");
    readButton.textContent = "Change Read Status";
    readButton.classList.add("read-button");

    readButton.setAttribute("data-book", myLibrary.indexOf(book));

    //add book detail to each card
    bookDetails.forEach((detail) => {
      let DOM = document.createElement("div");
      DOM.setAttribute("class", detail);
      //add text to each DOM
      DOM.textContent = detail + ": " + book[detail];
      card.appendChild(DOM);
    });
    card.appendChild(readButton);
    card.appendChild(deletebutton);
  });
}

//remove all card
function removeCardDIV() {
  let allCard = document.querySelectorAll(".card");
  allCard.forEach((card) => {
    if (card) {
      card.remove();
    }
  });
}

//delete function to remove book
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
function toggleReadStatus() {
  let statusBtn = document.querySelectorAll(".read-button");
  statusBtn.forEach((button) => {
    button.addEventListener("click", function () {
      let indexNumber = button.dataset.book;
      if (myLibrary[indexNumber].status === "Read") {
        myLibrary[indexNumber].status = "Unread";
      } else {
        myLibrary[indexNumber].status = "Read";
      }
      removeCardDIV();
      createCardDIV();
      deleteBook();
      toggleReadStatus();
    });
  });
}
