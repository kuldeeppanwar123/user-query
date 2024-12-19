import express from "express";
import userQueryRouter from "./userQuery.routes.js";

const router = express.Router();

router.use("/user-queries", userQueryRouter)

export default router;
