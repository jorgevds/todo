const container = document.getElementById("todo-list");
let toDo = [];

function toDoCreate() {
  // variable declaration
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo-item").value;
  let inputText = document.createTextNode(inputValue);
  let toDoList = document.getElementById("todo-list");

  // check for errors
  if (inputValue == null || inputValue == "") {
    alert("Please enter something to do");
  } else {
    // add to list, clear input
    li.appendChild(inputText);
    toDoList.appendChild(li);
    document.getElementById("todo-item").value = "";
  }
}
