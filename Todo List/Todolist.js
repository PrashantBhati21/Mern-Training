const todoLists = document.querySelector(".todoLists");
const inputValue = document.querySelector(".inputValue");
let todoListValue = [];

const getTodoListFromLS = () => {
  return JSON.parse(localStorage.getItem("todoItem")) || [];
};

const addTodoListLocalStorage = (todo) => {
  return localStorage.setItem("todoItem", JSON.stringify(todo));
};

const showTodoList = () => {
  todoListValue = getTodoListFromLS();
  todoListValue.forEach((curTodo) => {
    const listElement = document.createElement("li");
    listElement.innerHTML = curTodo;
    todoLists.append(listElement);
  });
};

const removeTodoList = (e) => {
  let currentTodo = e.target;

  updatedTodoList = todoListValue.filter(
    (curTodoValue) => curTodoValue !== currentTodo.textContent
  );
  addTodoListLocalStorage(updatedTodoList);
  currentTodo.remove();
};

const addTodoList = (e) => {
  e.preventDefault();

  todoListValue = getTodoListFromLS();
  let newTodo = inputValue.value.trim();
  inputValue.value = "";
  if (newTodo.length != 0 && !todoListValue.includes(newTodo)) {
    todoListValue.push(newTodo);

    //   todoListValue = [...new Set(todoListValue)];

    addTodoListLocalStorage(todoListValue);
    const listElement = document.createElement("li");
    listElement.innerHTML = newTodo;
    todoLists.append(listElement);
  }
};

showTodoList();
document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});
todoLists.addEventListener("click", (e) => removeTodoList(e));
