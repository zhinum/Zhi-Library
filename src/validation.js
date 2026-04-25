export class FormValidator {
  constructor(formElement) {
    this.form = formElement;
    this.inputs = document.querySelectorAll("input");
    this.setUpListeners();
  }

  setUpListeners() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", () => {});
      this.checkInputValidity(input);
      this.updateUi(input);
    });
  }

  checkInputValidity(input) {
    if (input.id === "title" && input.value.trim() === "") {
      input.setCustomValidity("you need to enter title");
    } else {
      input.setCustomValidity("");
    }
  }

  updateUi(input) {
    const errorMsg = document.querySelector(".error-msg");
    if (!input.validity.valid) {
      errorMsg.textContent = input.validationMessage;
    } else {
      errorMsg.textContent = "";
    }
  }
}
