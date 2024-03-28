class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.bookDetails = ["title", "author", "pages", "status"];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleReadStatus(index) {
    if (this.books[index].status === "Read") {
      this.books[index].status = "Unread";
    } else {
      this.books[index].status = "Read";
    }
  }

  createCardDIV() {
    const shelve = document.querySelector(".shelve");
    this.books.forEach((book, index) => {
      const card = document.createElement("div");
      card.setAttribute("id", `book${index}`);
      card.classList.add("card");
      shelve.appendChild(card);
      card.setAttribute("data-book", index);

      const deletebutton = document.createElement("button");
      deletebutton.textContent = "Delete";
      deletebutton.classList.add("delete-button");
      deletebutton.setAttribute("data-book", index);
      deletebutton.addEventListener("click", () => {
        this.removeBook(index);
        this.removeCardDIV();
        this.createCardDIV();
        this.deleteBook();
      });

      const readButton = document.createElement("button");
      readButton.textContent = "Change Read Status";
      readButton.classList.add("read-button");
      readButton.setAttribute("data-book", index);
      readButton.addEventListener("click", () => {
        this.toggleReadStatus(index);
        this.removeCardDIV();
        this.createCardDIV();
        this.deleteBook();
        this.toggleReadStatus();
      });

      this.bookDetails.forEach((detail) => {
        const DOM = document.createElement("div");
        DOM.setAttribute("class", detail);
        DOM.textContent = `${detail}: ${book[detail]}`;
        card.appendChild(DOM);
      });
      card.appendChild(readButton);
      card.appendChild(deletebutton);
    });
  }

  removeCardDIV() {
    const allCard = document.querySelectorAll(".card");
    allCard.forEach((card) => {
      if (card) {
        card.remove();
      }
    });
  }

  deleteBook() {
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach((button) => {
      button.addEventListener("click", () => {
        const indexNumber = button.dataset.book;
        this.removeBook(indexNumber);
        this.removeCardDIV();
        this.createCardDIV();
        this.deleteBook();
      });
    });
  }

  toggleReadStatus() {
    const statusBtn = document.querySelectorAll(".read-button");
    statusBtn.forEach((button) => {
      button.addEventListener("click", () => {
        const indexNumber = button.dataset.book;
        this.toggleReadStatus(indexNumber);
        this.removeCardDIV();
        this.createCardDIV();
        this.deleteBook();
        this.toggleReadStatus();
      });
    });
  }
}

const library = new Library();

const submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", () => {
  addBookToLibrary();
  library.removeCardDIV();
  library.createCardDIV();
  library.deleteBook();
  library.toggleReadStatus();
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset(); // Clears the form
});

function addBookToLibrary() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const status = getSelectedRadioValue();
  const book = new Book(title.value, author.value, pages.value, status);

  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    return false;
  } else {
    library.addBook(book);
  }
}

function getSelectedRadioValue() {
  const readInput = document.getElementsByName("read");
  for (let i = 0; i < readInput.length; i++) {
    if (readInput[i].checked) {
      return readInput[i].value;
    }
  }
}
