import AppDataSource from "../../data-source";
import Users from "../../entities/users.entity";
import Accounts from "../../entities/accounts.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import AppError from "../../errors/appErrors";
import bcrypt from "bcrypt";

const createUserService = async ({
  username,
  password,
}: IUserRequest): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.findOneBy({ username });

  if (username.length < 3) {
    throw new AppError("The username must consist of at least 3 characters");
  }

  if (password.length < 8) {
    throw new AppError("The password must consist of at least 8 characters");
  }

  if (users) {
    throw new AppError("Username already exists");
  }

  const user = userRepository.create({
    username: username,
    password: bcrypt.hashSync(password, 10),
  });

  await userRepository.save(user);

  const accountRepository = AppDataSource.getRepository(Accounts);

  const account = accountRepository.create({
    balance: 100,
  });

  await accountRepository.save(account);

  return {
    message: "Created user",
    data: user,
  };
};

export default createUserService;
