import { Library } from "./libraryMain.js";

export class LibraryLogic {
  constructor(container, uiInstance) {
    this.container = container;
    this.ui = uiInstance;
    this.form = document.querySelector("#book-form");

    this.init();
  }

  init() {
    this.mainBtnControl();
    this.formControl();
  }

  mainBtnControl() {
    this.container.addEventListener("click", (e) => {
      const card = e.target.closest(".book-card");
      const id = card.dataset.id;
      if (e.target.classList.contains("delete-button")) {
        this.removeBook(id);
      } else if (e.target.classList.contains("toggle-button")) {
        this.toogleRead(id);
      }
    });
  }

  removeBook(id) {
    Library.allbooks = Library.allbooks.filter((book) => book.id !== id);

    this.ui.renderBooks();
  }
  toogleRead(id) {
    const book = Library.allbooks.find((b) => b.id === id);

    if (book) {
      book.ifRead = !book.ifRead;
      this.ui.renderBooks();
    }
  }

  formControl() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submitBook();
      console.log(Library.allbooks);
    });

    const overlay = document.querySelector("#form-overlay");
    const openBtn = document.querySelector("#open-button");
    const closeBtn = document.querySelector(".close-btn");

    openBtn.addEventListener("click", () => {
      overlay.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  }

  submitBook() {
    const data = new FormData(this.form);
    const newBook = new Library({
      title: data.get("title"),
      author: data.get("author"),
      pages: data.get("pages"),
      ifRead: data.get("ifRead") !== null,
    });

    Library.allbooks.push(newBook);

    this.form.reset();
    this.ui.renderBooks();
  }
}
