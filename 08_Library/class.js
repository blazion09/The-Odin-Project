class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, status) {
    this.books.push({ title, author, pages, status });
  }

  addBookFromDOM() {
    //data from form
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = getSelectedRadioValue();

    function getSelectedRadioValue() {
      let readInput = document.getElementsByName("read");

      for (let i = 0; i < readInput.length; i++) {
        if (readInput[i].checked) {
          return readInput[i].value;
        }
      }
    }

    if (title.trim() === "" || author.trim() === "" || pages.trim() === "") {
      return false;
    } else {
      this.books.push({ title, author, pages, status });
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  updateStatus(index) {
    if (this.books[index].status === "Unread") {
      this.books[index].status = "Read";
    } else {
      this.books[index].status = "Unread";
    }
  }
}

class LibraryDOM {
  constructor() {
    this.bookDetails = ["title", "author", "pages", "status"];
  }

  createCard(libraryArray) {
    libraryArray.forEach((book) => {
      const card = document.createElement("div");
      card.setAttribute("id", `Book${libraryArray.indexOf(book)}`);
      card.classList.add("card");
      card.setAttribute("data-book", `Book${libraryArray.indexOf(book)}`);
      document.querySelector(".shelve").appendChild(card);

      this.createCardContent(book, card);
      this.createToggleStatusBtn(libraryArray, book, card);
      this.createDeleteButton(libraryArray, book, card);
    });
  }

  createCardContent(book, card) {
    this.bookDetails.forEach((detail) => {
      let DOM = document.createElement("div");
      DOM.setAttribute("class", detail);
      //add text to each DOM
      DOM.textContent = detail + ": " + book[detail];
      card.appendChild(DOM);
    });
  }

  createToggleStatusBtn(libraryArray, book, card) {
    let readButton = document.createElement("button");
    readButton.textContent = "Change Read Status";
    readButton.classList.add("read-button");
    readButton.setAttribute("data-book", libraryArray.indexOf(book));
    card.appendChild(readButton);
    // add event listener for the button
    readButton.addEventListener("click", function () {
      if (libraryArray[libraryArray.indexOf(book)].status === "Read") {
        libraryArray[libraryArray.indexOf(book)].status = "Unread";
      } else {
        libraryArray[libraryArray.indexOf(book)].status = "Read";
      }
      removeCardDIV();
      libraryDOM.createCard(libraryArray);
    });
  }

  createDeleteButton(libraryArray, book, card) {
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.classList.add("delete-button");
    deletebutton.setAttribute("data-book", libraryArray.indexOf(book));
    card.appendChild(deletebutton);
    // add event listener for the button
    deletebutton.addEventListener("click", function () {
      library.removeBook(libraryArray.indexOf(book));
      removeCardDIV();
      libraryDOM.createCard(libraryArray);
    });
  }
}

function removeCardDIV() {
  let allCard = document.querySelectorAll(".card");
  allCard.forEach((card) => {
    if (card) {
      card.remove();
    }
  });
}

const library = new Library();
const libraryDOM = new LibraryDOM();

let shelve = library.books;
let submitBtn = document.getElementById("submit-button");

library.addBook("Harry Potter", "JK Rowling", 1231, "Unread");
library.addBook("Game of Throne", "GRRM", 2231, "Unread");
libraryDOM.createCard(shelve);

submitBtn.addEventListener("click", () => {
  library.addBookFromDOM();
  removeCardDIV();
  libraryDOM.createCard(shelve);
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset(); // Clears the form
});
