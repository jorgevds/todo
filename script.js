let toDoItems = [];

function renderToDoCreate(toDo) {
  const list = document.querySelector(".todo-list");

  const isChecked = toDo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", toDo.id);
  node.innerHTML = `
  <input id="${toDo.id}" type="checkbox"/>
  <label for="${toDo.id}" class="tick js-tick"></label>
  <span>${toDo.text}</span>
  <button class="delete-todo js-delete-todo">
  </button>
`;

  list.append(node);
}

function toDoCreate(text) {
  const toDo = {
    text,
    checked: false,
    id: Date.now(),
  };

  toDoItems.push(toDo);

  console.log(toDo);
  renderToDoCreate(toDo);
}

const form = document.querySelector(".todo-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".todo-item-input");
  const text = input.value.trim();
  if (text !== "") {
    toDoCreate(text);
    input.value = "";
    input.focus();
  }
});

function toDoDelete() {}
