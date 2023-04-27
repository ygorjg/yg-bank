import { Express } from "express";
import sessionsRoutes from "./sessions.routes";
import userRoutes from "./users.routes";

export const AppRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", sessionsRoutes());
};
