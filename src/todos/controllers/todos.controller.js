import { TodoService } from "../services/todos.service.js";


export class TodoController {
    constructor() {
        this.todoService = new TodoService();
    }

    Add = (todo) => this.todoService.Add(todo);

    getAll = () => this.todoService.getAll();

    getOne = (id) => this.todoService.getOne(id);

    delete = (id) => this.todoService.delete(id);

    update = (id, item) => this.todoService.update(id, item);
}