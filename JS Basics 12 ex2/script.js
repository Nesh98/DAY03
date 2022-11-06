console.log('hello!')



const form = document.querySelector("#form");
const inputTodo = document.querySelector("#todoInput");
const todolist = document.querySelector("#todolist");
form.onsubmit = function(event) {
event.preventDefault();
const newTodo = document.createElement("li");
newTodo.innerHTML = inputTodo.value;
todolist.appendChild(newTodo);
inputTodo.value = "";
};