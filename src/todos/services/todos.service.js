import { Todo } from '../models/todos.js';

export class TodoService {

    Add = (todo) => {
        const repository = new Todo({
            title: todo.title,
            completed: todo.completed,
            userId: todo.userId,
        });
        return repository.save();
    };

    update = async (id, item) => {
        const result = Todo.findByIdAndUpdate({ _id: id }, item);
        if (result)
            return this.getOne(id);
        return null;
    }

    delete = (id) => Todo.remove({ _id: id });

    getOne = (id) => Todo.findOne({ _id: id });

    getAll = () => Todo.find().populate('userId');;
}