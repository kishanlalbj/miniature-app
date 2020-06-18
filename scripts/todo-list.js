class ToDoList {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
    return todo;
  }

  get todoList() {
    return this.list;
  }
}
