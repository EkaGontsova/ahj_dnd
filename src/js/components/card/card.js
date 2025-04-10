import "./card.css";

export default class Card {
  constructor(message) {
    this.element = document.createElement("li");
    this.element.classList.add("cards__item");

    this.element.classList.add("draggable");

    this.text = document.createElement("span");
    this.text.classList.add("cards__text");
    this.text.textContent = message;

    this.removeButton = document.createElement("span");
    this.removeButton.classList.add("remove-btn", "hidden");

    this.element.append(this.text, this.removeButton);

    this.onMouseenterHandler = this.onMouseenter.bind(this);
    this.onClickRemoveHandler = this.clickOnRemoveButton.bind(this);
    this.onMouseleaveHandler = this.onMouseleave.bind(this);

    this.addEventListeners();
  }

  addCard(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    parentElement.append(this.element);
  }

  addEventListeners() {
    this.element.addEventListener("mouseenter", this.onMouseenterHandler);
    this.element.addEventListener("click", this.onClickRemoveHandler);
    this.element.addEventListener("mouseleave", this.onMouseleaveHandler);
    this.element.addEventListener("mousedown", this.onMouseDownHandler);
    this.element.addEventListener("mouseup", this.onMouseUpHandler);
  }
  onMouseDown() {
    this.element.style.cursor = "grabbing";
  }

  onMouseUp() {
    this.element.style.cursor = "grab";
  }

  removeListeners() {
    this.element.removeEventListener("mouseenter", this.onMouseenterHandler);
    this.element.removeEventListener("click", this.onClickRemoveHandler);
    this.element.removeEventListener("mouseleave", this.onMouseleaveHandler);
  }
  onMouseenter() {
    this.removeButton.classList.remove("hidden");
  }
  onMouseleave() {
    this.removeButton.classList.add("hidden");
  }

  clickOnRemoveButton() {
    this.removeListeners();
    this.element.remove();
  }
}
