import ToDoList from "./todo-list";
import ToDo from "./todo";

const ToDoController = (() => {
  let todoList = new ToDoList();

  return {
    getToDoList: () => {
      // let todo = new ToDo("test", false);
      let list = todoList.todoList;
      return list;
    },
    addToDo: (todo) => {
      let newtodo = new ToDo(todo.title, todo.completed);
      return todoList.addTodo(newtodo);
    },
  };
})();

export const UIController = ((todoctl) => {
  let todoList = document.getElementById("todo-list");
  let todoTitle = document.getElementById("title");
  let form = document.getElementById("form-todo");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let list = todoctl.addToDo({
      title: todoTitle.value,
      completed: false,
    });

    todoList.innerHTML += '<div class="complete">' + list.title + "</div>";
    todoctl.getToDoList();
    form.reset();
  });

  return {
    init: () => console.log("Application Initialized...")
  }
})(ToDoController);
