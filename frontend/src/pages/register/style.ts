import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  .logo {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    color: #314586;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 50px;
  }

  .boxRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 320px;
    background-color: #322935;
    border-radius: 5px;

    @media (min-width: 600px) {
      width: 50vw;
    }
    @media (min-width: 1100px) {
      width: 30vw;
    }
  }

  .divCreateAccount {
    display: flex;
    flex-direction: column;
    margin-top: -25px;
  }

  .textCreateAccount {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    text-align: center;
    color: #35d2e7;
  }

  .formRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
  }

  .labelUsername,
  .labelPassword {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #35d2e7;
    margin-bottom: 2px;
  }

  .labelUsername {
    margin-top: 12px;
  }

  .labelPassword {
    margin-top: 25px;
  }

  .inpUsername,
  .inpPassword {
    width: 239px;
    height: 35px;
    background: #d9d9d9;
    border-radius: 5px;
    border: none;
  }

  .msgErrorPass,
  .msgErrorUser {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    color: #fe5656;
    position: absolute;
  }

  .msgErrorUser {
    margin-top: -46px;
  }

  .msgErrorPass {
    margin-top: 118px;
  }

  .divBtnCadastrar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .btnCadastrar {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    color: #35d2e7;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 147px;
    height: 34px;
    background: #314586;
    border-radius: 5px;
    border: none;
  }

  .btnCadastrar:hover {
    color: #314586;
    background-color: #35d2e7;
    transition: 400ms;
  }

  .btnGoToLogin {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #35d2e7;
    width: 250px;
    height: 34px;
    background: #314586;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
  }
  .btnGoToLogin:hover {
    background-color: #d9d9d9;
    color: #314586;
    transition: 400ms;
  }
`;
