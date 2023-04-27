import AppDataSource from "../../data-source";
import AppError from "../../errors/appErrors";
import bcrypt from "bcrypt";
import { IUserRequest } from "../../interfaces/users";
import Users from "../../entities/users.entity";
import jwt from "jsonwebtoken";

const loginUserService = async ({
  username,
  password,
}: IUserRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ username });

  if (!user) {
    throw new AppError("Wrong username/password", 403);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Wrong username/password", 403);
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {
    subject: user.username,
    expiresIn: "24h",
  });

  return token;
};

export default loginUserService;
