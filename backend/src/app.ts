import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes";
import handleErrorMidleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());
app.use(cors());

AppRoutes(app);

app.use(handleErrorMidleware);

export default app;
