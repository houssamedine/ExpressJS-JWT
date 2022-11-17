import express from "express";
import { PhotoController } from './controllers/photo.controller.js'

export const route = express();
route.use(express.json());

const photoController = new PhotoController();

//GetAll
route.get('/', async (req, res) => {
    try {
        const result = await photoController.getAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GetOne
route.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await photoController.getOne(id);
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
        const result = await photoController.Add(body);
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
        const result = await photoController.delete(id);
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
        const result = await photoController.update(id, body);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (error) {
        res.status(500).json(error);
    }

})
