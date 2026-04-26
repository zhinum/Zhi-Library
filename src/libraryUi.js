import { Library } from "./libraryMain.js";
export class LibraryUi {
  constructor(container) {
    this.container = container;
    this.bookContainer = document.createElement("div");
    this.bookContainer.classList.add("books-container");
    this.container.appendChild(this.bookContainer);
  }

  renderBooks() {
    this.bookContainer.innerHTML = "";
    Library.allbooks.forEach((book) => {
      const bookCard = this.createBooks(book);
      this.bookContainer.appendChild(bookCard);
    });
  }

  helpCreateElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;

    return element;
  }
  ifReadStatus(card) {
    return card.ifRead ? "read" : "not-read";
  }

  createBooks(card) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = card.id;

    const title = this.helpCreateElement("h3", "book-title", card.title);

    const author = this.helpCreateElement("h5", "book-author", card.author);

    const pages = this.helpCreateElement("span", "book-page", card.pages);

    const ifRead = this.helpCreateElement(
      "p",
      "read-status",
      this.ifReadStatus(card),
    );

    const delBtn = this.helpCreateElement("button", "delete-button", "Delete");
    const togBtn = this.helpCreateElement(
      "button",
      "toggle-button",
      "read status",
    );

    bookCard.append(title, author, pages, ifRead, delBtn, togBtn);

    return bookCard;
  }
}
