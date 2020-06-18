const ToDoController = (() => {
  let todoList = new ToDoList();

  return {
    getToDoList: () => {
      let todo = new ToDo("test", false);
      let list = todoList.addTodo(todo);
      return list;
    },
    addToDo: (todo) => {
      let newtodo = new ToDo(todo.title, todo.completed);
      return todoList.addTodo(newtodo);
    },
  };
})();

const UIController = (() => {
  let todoList = document.getElementById("todo-list");
  let todoTitle = document.getElementById("form-todo");
  let button = document.getElementById("submit-button");
  
  return {
    init: () => {
      console.log("Initialized");
      console.log(ToDoController.getToDoList());
    },
    addToDo: () => {
      ToDoController.addToDo({ title: "TEst22", completed: false });
    },
  };
})(ToDoController);

UIController.init();
