import ToDo from "./components/todo";
import HttpClient from "./services/http-service"

const ToDoController = (() => {
  let todos = []
  let http = new HttpClient

  http.get("https://jsonplaceholder.typicode.com/todos/1").then(result => {
    console.log(result)
  })

  return {
    getToDoList: () => {
      return todos;
    },
    addToDo: (todo) => {
      let newtodo = new ToDo(todo.title, todo.completed);
      todos.push(newtodo)
      console.log(todos)
      return newtodo
    },
    deleteToDo: (index) => {
      todos.splice(index, 1)
      console.log("Agfter delete", todos)
    }
  };
})();

export const UIController = ((todoctl) => {
  let todoList = document.querySelector(".todo-list");

  let todoTitle = document.getElementById("title");
  let form = document.querySelector(".form-todo");

  function addTodo(e) {
    let list = todoctl.addToDo({
      title: todoTitle.value,
      completed: false,
    });
    displayTodo()
    form.reset();
  }

  function displayTodo() {

    let lists = todoctl.getToDoList()
    todoList.innerHTML = ""

    lists.map((todo, index) => {
      todoList.innerHTML += `
        <div id="${index}" class="todo">
          <span>${todo.title}</span>
          <button href="#" class="btn-link" style="float:right"> X </button> 
        </div>
      `
    })

    let deleteButtons = document.getElementsByClassName("todo")

    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", (e) => {
        console.log(e)
        todoctl.deleteToDo(e.target.id)
      })
    }
  }

  function setupEventListeners() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addTodo(e)
    });
  }

  return {
    init: () => {
      setupEventListeners();
      console.log("Application Initialized...")
    }
  }
})(ToDoController);
