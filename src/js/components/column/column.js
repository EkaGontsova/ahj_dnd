import "./column.css";
import Card from "../card/card";
import Form from "../form/form";

export default class Column {
  constructor(title, dataAttribute) {
    this.element = document.createElement("div");
    this.element.classList.add("column");
    this.element.dataset.title = dataAttribute;

    this.header = document.createElement("header");
    this.header.classList.add("header");

    this.title = document.createElement("h3");
    this.header.classList.add("header__title");
    this.title.textContent = title;

    this.header.append(this.title);

    this.list = document.createElement("ul");
    this.list.classList.add("cards");

    this.button = document.createElement("button");
    this.button.classList.add("column__button");
    this.button.type = "button";
    this.button.textContent = "+ Add another task";

    this.element.append(this.header, this.header, this.list, this.button);

    this.addEventListeners();
  }

  render(parentSelector, data) {
    this.parentElement = document.querySelector(parentSelector);
    this.parentElement.append(this.element);

    const attribute = this.element.dataset.title;
    const messages = data[attribute];

    for (let i = 0; i < messages.length; i += 1) {
      const card = new Card(messages[i]);
      card.addCard(`[data-title="${attribute}"] .cards`);
    }

    this.form = new Form();
    this.form.render(`[data-title="${attribute}"] .cards`);
  }
  clickOnForm() {
    this.button.classList.add("hidden");
    this.form.showForm();
  }

  addEventListeners() {
    this.button.addEventListener("click", this.clickOnForm.bind(this));
  }
}
