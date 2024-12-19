import express from "express";
import { createUserQueryController } from "../controllers/userQuery.controller.js";

const userQueryRouter = express.Router();

userQueryRouter.post("/", createUserQueryController)

export default userQueryRouter;
