import * as express from "express";
import { AuthController } from "./controllers/auth.controller.js";
export const route = express.Router();
route.use(express.json());

const authController = new AuthController();

route.post("/login", async (req, res) => {
  try {
    const { body } = req;
    const result = await authController.login(body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

route.post("/register", async (req, res) => {
  try {
    const { body } = req;
    const result = await authController.register(body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
