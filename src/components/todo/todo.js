const TODO_INPUT_EL = "todoInputEl";
const TODO_LIST_EL = "todoList";

addTodo = () => {
    const _todoNameEl = document.getElementById(TODO_INPUT_EL);
    const _todoListEl = document.getElementById(TODO_LIST_EL);

    const _todoName = _todoNameEl.value;
    const _todoEl = createTodoElement(_todoName);
    _todoListEl.appendChild(_todoEl);
    _todoNameEl.value = "";
}

createTodoElement = (innerText) => {
    const _el = document.createElement("div");
    _el.classList.add("todo-item");
    _el.appendChild(document.createTextNode(innerText));
    return _el;
}