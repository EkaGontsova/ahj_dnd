import Column from "./components/column/column";
import Container from "./components/container/container";
import Storage from "./storage";
import DnD from "./dnd";

export default class App {
  constructor() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");

    document.body.append(this.wrapper);

    this.container = new Container();

    this.columnTodo = new Column("todo", "todo");
    this.columnProgress = new Column("in progress", "in_progress");
    this.columnDone = new Column("done", "done");

    this.dnd = new DnD();
    this.storage = new Storage();
  }

  init() {
    this.render();
  }

  render() {
    this.wrapper.append(this.container.element);

    const data = this.storage.formData;

    this.columnTodo.render(".container", data);
    this.columnProgress.render(".container", data);
    this.columnDone.render(".container", data);
  }
}

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.init();
  });
})();
