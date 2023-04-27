import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext, IAuthProviderProps, IUserRequest } from "../interfaces";
import api from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  const signIn = (userData: IUserRequest) => {
    api
      .post("/login", userData)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@token", response.data.token);
        window.localStorage.setItem("@username", userData.username);
        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
        toast.success("Login efetuado com sucesso!");
        navigate("/dashboard");
      })
      .catch(() => toast.error("E-mail ou senha inválidos!"));
  };

  const registration = (userData: IUserRequest) => {
    api
      .post("/users", userData)
      .then((response) => {
        toast.success("Cadastro efetuado com sucesso!");
        navigate("/login");
      })
      .catch(() => toast.error("Esse nome de usuário já em está em uso!"));
  };

  return (
    <AuthContext.Provider value={{ signIn, registration }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
