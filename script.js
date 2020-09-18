let toDoItems = [];

function renderToDoCreate(toDo) {
  const list = document.querySelector(".todo-list");
  const item = document.querySelector(`[data-key='${toDo.id}']`);

  if (toDo.deleted) {
    item.remove();
    return;
  }

  const isChecked = toDo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", toDo.id);
  node.innerHTML = `
  <input id="${toDo.id}" type="checkbox"/>
  <label for="${toDo.id}" class="tick js-tick"></label>
  <span>${toDo.text}</span>
  <button class="delete-todo js-delete-todo">
  <svg><use href="#delete-icon"></use></svg>
  </button>
`;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
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

function toggleDone(key) {
  const index = toDoItems.findIndex((item) => item.id === Number(key));
  toDoItems[index].checked = !toDoItems[index].checked;
  renderToDoCreate(toDoItems[index]);
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

const list = document.querySelector(".todo-list");

list.addEventListener("click", (event) => {
  // toggle
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  // delete
  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteToDo(itemKey);
  }
});

function deleteToDo(key) {
  const index = toDoItems.findIndex((item) => item.id === Number(key));

  const toDo = {
    deleted: true,
    ...toDoItems[index],
  };

  toDoItems = toDoItems.filter((item) => item.id !== Number(key));
  renderToDoCreate(toDo);
}
