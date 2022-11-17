import express from "express";
import { AlbumController } from './controllers/album.controller.js';

export const route = express();
route.use(express.json());

const albumController = new AlbumController();

//Add
route.post('/', async (req, res) => {
    try {
        const { body } = req;
        const result = await albumController.Add(body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json();
    }
});

//GetOne
route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await albumController.getOne(id);
        if (result)
            res.status(200).json(result);
        res.status(404).json()
    } catch (error) {
        res.status(500).json()
    }
});

//GetAll
route.get('/', async (req, res) => {
    try {
        const result = await albumController.getAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete
route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await albumController.delete(id);
        if (result)
            res.status(200).json(result);
        res.status(404).json()
    } catch (error) {
        res.status(500).json()
    }
});

//Update
route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const result = await albumController.update(id, body);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (error) {
        res.status(500).json(error);
    }

})