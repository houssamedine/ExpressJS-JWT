import express from "express";
import { UserController } from "./controllers/user.controller.js"

export const route = express();
route.use(express.json());

const userController = new UserController();

const sanitize = (item) => {
    const { password, salt, ...user } = item;
    return user;
}

//GetAll: ==> sans le test de 404
route.get('/', async (req, res) => {
    try {
        const result = await userController.getAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GetOne 
route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userController.getOne(id);
        if (result)
            res.status(200).json(sanitize(result));
        res.status(404).json();
    } catch (error) {
        console.error(err);
        res.status(500).json();
    }
});

//AdOne : ==> sans le test de 404
route.post('/', async (req, res) => {
    try {
        const { body } = req;
        console.log({ body });
        const result = await userController.Add(body);
        res.status(201).json(sanitize(result));
    } catch (err) {
        console.error(err);
        res.status(500).json();
    }
});

//Delete
route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userController.delete(id);
        if (result)
            res.status(200).json(sanitize(result));
        res.status(404).json();
    } catch (error) {
        console.error(err);
        res.status(500).json();
    }
});

//Update
route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const result = await userController.update(id, body);
        if (result)
            res.status(200).json(result);
        res.status(404).json();
    } catch (error) {
        res.status(500).json();
    }

})





