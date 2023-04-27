import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { IUserRequest } from "../../interfaces";
import { Container } from "./style";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const formSchema = yup.object().shape({
    username: yup.string().required("Você deve inserir um nome de usuário!"),
    password: yup.string().required("Você deve inserir uma senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <h1 className="logo">YG Bank</h1>
      <div className="boxLogin">
        <div className="divWelcomeText">
          <h4 className="welcomeText">Bem-vindo(a) de volta!</h4>
          <h4 className="enterText">Entre com sua conta:</h4>
        </div>
        <form className="formLogin" onSubmit={handleSubmit(signIn)}>
          <label className="labelUsername" htmlFor="username">
            Nome de usuário
          </label>
          <input
            className="inpUsername"
            type="text"
            placeholder="Insira aqui o seu nome de usuário"
            id="username"
            {...register("username")}
          />
          <p className="msgErrorUser">{errors.username?.message}</p>
          <label className="labelPassword" htmlFor="password">
            Senha
          </label>
          <input
            className="inpPassword"
            type="password"
            placeholder="Insira aqui a sua senha"
            id="password"
            {...register("password")}
          />
          <p className="msgErrorPass">{errors.password?.message}</p>
          <div className="divBtnEntrar">
            <button className="btnEntrar" type="submit">
              ENTRAR
            </button>
          </div>
        </form>
      </div>

      <div className="divCadastreSe">
        <h4 className="questCadastreSe">Ainda não possui uma conta?</h4>
        <Link to="/register">
          <button className="btnCadastreSe">CADASTRE-SE</button>
        </Link>
      </div>
    </Container>
  );
};

export default Login;
