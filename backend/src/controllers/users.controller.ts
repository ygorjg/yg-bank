import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../interfaces/users";

import createUserService from "../services/users/createUser.service";
import loginUserService from "../services/sessions/loginUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { username, password }: IUserRequest = req.body;
  const response = await createUserService({ username, password });
  return res.status(201).json(instanceToPlain(response));
};

const loginUserController = async (req: Request, res: Response) => {
  const { username, password }: IUserRequest = req.body;
  const token = await loginUserService({ username, password });
  return res.json({ token });
};

export { createUserController, loginUserController };
