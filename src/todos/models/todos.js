import mongoose from 'mongoose';
const { Schema } = mongoose;


const todosSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    userId: {
        required: true,
        type: mongoose.ObjectId,
        ref: 'User'
    }
});

export const Todo = mongoose.model('Todo', todosSchema, 'Todos');