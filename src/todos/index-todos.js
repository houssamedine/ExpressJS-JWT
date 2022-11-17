import express from 'express';
import { TodoController } from './controllers/todos.controller.js';

export const route = express();
route.use(express.json());

const todoController = new TodoController();

//Add
route.post('/', async (req, res) => {
    try {
        const { body } = req;
        const result = await todoController.Add(body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json();
    }
});

//GetAll
route.get('/', async (req, res) => {
    try {
        const result = await todoController.getAll()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json();
    }
});


//GetOne
route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await todoController.getOne(id);
        if (result)
            res.status(200).json(result);
        res.status(404).json()
    } catch (error) {
        res.status(500).json()
    }
});


//Delete

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await todoController.delete(id);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update
route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const result = await todoController.update(id, body);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (error) {
        res.status(500).json(error);
    }

})