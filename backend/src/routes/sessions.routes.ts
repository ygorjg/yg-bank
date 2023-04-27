import { Router } from "express";
import { loginUserController } from "../controllers/users.controller";

const routes = Router();

const sessionsRoutes = () => {
  routes.post("/", loginUserController);
  return routes;
};

export default sessionsRoutes;
