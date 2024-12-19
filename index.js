import express from "express";
import morgan from "morgan";
import cors from "cors";
import {config as conf} from 'dotenv';
import router from "./src/v1/routers/index.routes.js";
import connectDB from "./src/v1/config/db.config.js";
const PORT = process.env.PORT;
conf();


const app = express();
app.use(express.json())
app.use(morgan("common"));
app.use(
  cors({
    Credential: true,
    origin: "*"
  })
);



app.use("/", router);
app.use((err, req, res, next) => {
  return res.status(500).send({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
  connectDB();
});
