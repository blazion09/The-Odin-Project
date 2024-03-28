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

  updateStatus(index, readStatus) {
    this.books[index].status = readStatus;
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

  createCard(library) {
    library.forEach((book) => {
      const card = document.createElement("div");
      card.setAttribute("id", library.indexOf(book));
      card.classList.add("card");
      card.setAttribute("data-book", library.indexOf(book));
      document.querySelector(".shelve").appendChild(card);
    });
  }
}

const libraryDOM = new LibraryDOM();
