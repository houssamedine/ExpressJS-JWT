import express from "express";
import { PostController } from './controllers/post.controller.js'

export const route = express();
route.use(express.json());

const postController = new PostController();

//GetAll
route.get('/', async (req, res) => {
    try {
        const result = await postController.getAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GetOne
route.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await postController.getOne(id);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (err) {
        res.status(500).json(err);
    }
});

//Add
route.post('/', async (req, res) => {
    try {
        const { body } = req;
        console.log({ body });
        const result = await postController.Add(body);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json();
    }
});

//Delete
route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await postController.delete(id);
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
        const result = await postController.update(id, body);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (error) {
        res.status(500).json(error);
    }

})
