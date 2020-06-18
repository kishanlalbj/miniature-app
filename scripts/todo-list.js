export default class ToDoList {
  constructor() {
    this.list = [];
  }

  addTodo(todo) {
    this.list.push(todo);
    return todo;
  }

  get todoList() {
    console.log(this.list);
    return this.list;
  }
}
