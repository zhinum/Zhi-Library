export class Library {
  static #library = [];
  constructor(book) {
    this.id = crypto.randomUUID();
    this.title = book.title;
    this.author = book.author || "Author wasn't provided.";
    this.pages = book.pages;
    this.ifRead = book.ifRead;
  }
  static get allbooks() {
    return Library.#library;
  }
  get readStatus() {
    return this.ifRead;
  }
}
