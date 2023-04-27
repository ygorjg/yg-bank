export interface IUserRequest {
  username: string;
  password: string;
}

export interface IUserResponse {
  message: string;
  data: IUser;
}

export interface IUser {
  id: string;
  username: string;
  password: string;
}
