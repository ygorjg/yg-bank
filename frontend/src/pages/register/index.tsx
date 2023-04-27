import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { IUserRequest } from "../../interfaces";
import { Container } from "./style";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { registration } = useContext(AuthContext);
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Você deve inserir um nome de usuário!")
      .min(3, "Deve possuir no mínimo 3 carácteres!"),
    password: yup
      .string()
      .required("Você deve inserir uma senha!")
      .min(8, "Deve possuir no mínimo 8 carácteres!")
      .matches(/(\d)/, "Deve conter ao menos 1 número!")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula!"),
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
      <div className="boxRegister">
        <div className="divCreateAccount">
          <h4 className="textCreateAccount">
            Insira seus dados e crie sua conta:
          </h4>
        </div>
        <form className="formRegister" onSubmit={handleSubmit(registration)}>
          <label className="labelUsername" htmlFor="username">
            Nome de usuário
          </label>
          <input
            className="inpUsername"
            type="text"
            placeholder="Insira aqui um nome de usuário"
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
            placeholder="Insira aqui uma senha"
            id="password"
            {...register("password")}
          />
          <p className="msgErrorPass">{errors.password?.message}</p>
          <div className="divBtnCadastrar">
            <button className="btnCadastrar" type="submit">
              CADASTRAR
            </button>
          </div>
        </form>
      </div>

      <Link to="/login">
        <button className="btnGoToLogin">JÁ POSSUO CADASTRO</button>
      </Link>
    </Container>
  );
};

export default Register;
