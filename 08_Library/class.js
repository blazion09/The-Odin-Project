class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, status) {
    this.books.push({ title, author, pages, status });
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

const library = new Library();
library.addBook("Harry Potter", "JK Rowling", 1231, "Unread");
library.addBook("Game of Throne", "GRRM", 2231, "Unread");

let shelve = library.books;

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
    readButton.setAttribute("data-book", `Book${libraryArray.indexOf(book)}`);
    card.appendChild(readButton);
  }
}

const libraryDOM = new LibraryDOM();
