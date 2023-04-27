import { Router } from "express";
import { createUserController } from "../controllers/users.controller";

const routes = Router();

const userRoutes = () => {
  routes.post("/", createUserController);
  return routes;
};

export default userRoutes;
