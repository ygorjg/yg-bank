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

  .boxLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
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

  .divWelcomeText {
    display: flex;
    flex-direction: column;
  }

  .welcomeText,
  .enterText {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    text-align: center;
    color: #35d2e7;
  }

  .welcomeText {
    margin-top: -15px;
  }

  .enterText {
    margin-top: -15px;
  }

  .formLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 1px;
    position: absolute;
  }

  .msgErrorUser {
    margin-top: 60px;
  }

  .msgErrorPass {
    margin-top: 140px;
  }

  .divBtnEntrar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .btnEntrar {
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

  .btnEntrar:hover {
    color: #314586;
    background-color: #35d2e7;
    transition: 400ms;
  }

  .divCadastreSe {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .questCadastreSe {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #314586;
  }

  .btnCadastreSe {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #35d2e7;
    width: 159px;
    height: 34px;
    background: #314586;
    border-radius: 5px;
    border: none;
  }
  .btnCadastreSe:hover {
    background-color: #d9d9d9;
    color: #314586;
    transition: 400ms;
  }
`;
