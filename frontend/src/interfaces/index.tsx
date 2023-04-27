import { ReactNode } from "react";

export interface IUserRequest {
  username: string;
  password: string;
}

export interface IAuthContext {
  signIn: (formSchema: IUserRequest) => void;
  registration: (formSchema: IUserRequest) => void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
