import ToDo from "./components/todo";
import HttpClient from "./services/http-service"

const todoController = (() => {
  let todos = []
  let http = new HttpClient()

  http.get("https://jsonplaceholder.typicode.com/todos/1").then(result => {
    console.log(result)
  })

  const addToDo = (title) => {
    let id = todos.length
    let newtodo = new ToDo(id, title, false);
    todos.push(newtodo)
    return newtodo
  }

  const deleteTodo = (id) => {
    todos.splice(id, 1)
    return id
  }

  return {
    getToDoList: () => {
      return todos;
    },
    add: (title) => addToDo(title),
    delete: (id) => deleteTodo(id),
  };
})();

export const UIController = (() => {
  let DOM = {
    todoList: ".todo-list",
    todoTitle: "title",
    form: ".form-todo"
  }



  const addListItem = (todo) => {
    console.log(todo)
    // console.log(document.querySelector(DOM.todoList))
    document.querySelector(DOM.todoList).innerHTML += `
        <div id="todo-${todo.id}" class="todo">
          <span>${todo.title}</span>
          <button class="btn-link" style="float:right"> X </button> 
        </div>
      `
  }

  const removeListItem = (id) => {

    document.getElementById(id).remove()

  }


  return {
    addListItem,
    removeListItem,
    getDOM: () => DOM
  }
})();


export const appController = ((todoCtl, UICtl) => {

  let DOM = UICtl.getDOM()

  const setupEventListeners = () => {

    let form = document.querySelector(".form-todo");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addItemHandler()
    });

    // Event delegation setup for delete
    document.querySelector(DOM.todoList).addEventListener('click', (e) => {
      let id = e.target.parentNode.id
      deleteItemHandler(id)
    })
  }

  var addItemHandler = () => {

    // Get the input value
    let title = document.getElementById(DOM.todoTitle).value

    // Create Todo object
    let todo = todoCtl.add(title)

    // Add todo to UI
    UICtl.addListItem(todo)

    // Clear Input
    document.getElementById(DOM.todoTitle).value = ""
  }

  var deleteItemHandler = (id) => {
    if (id) {
      // Delete from local datastructure 
      todoCtl.delete(id)

      // Remove from UI
      UICtl.removeListItem(id)
    }
  }


  return {
    init: () => {
      setupEventListeners();
      console.log("Application Initialized...")
    }
  }
})(todoController, UIController)