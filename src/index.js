import "./library.css";
import { LibraryUi } from "./libraryUi.js";
import { LibraryLogic } from "./libraryLogic.js";
import { Library } from "./libraryMain.js";
import { FormValidator } from "./validation.js";

const mainContainer = document.querySelector("#content");
console.log(mainContainer);
const formElement = document.querySelector("form");
const form = new FormValidator(formElement);
const libraryDisplay = new LibraryUi(mainContainer);

const libraryControl = new LibraryLogic(mainContainer, libraryDisplay);

const book1 = new Library({
  title: "Palace of solitude",
  author: "zhinum",
  pages: "555",
  ifRead: "true",
});

const book2 = new Library({
  title: "Rise of Excalibar",
  author: "zhinum",
  pages: "47",
  ifRead: "false",
});
Library.allbooks.push(book1, book2);
libraryDisplay.renderBooks();
