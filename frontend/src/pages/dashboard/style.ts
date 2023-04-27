import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
  }

  .logo {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    color: #314586;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .btnSair {
    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #35d2e7;
    background-color: #314586;
    border-radius: 5px;
    border: none;
  }

  .btnSair:hover {
    background-color: #d9d9d9;
    color: #314586;
    transition: 400ms;
  }

  main {
    height: 100vh;
    background-color: #322935;
  }

  .divGreetBalance {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .greeting,
  .balance {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #35d2e7;
  }

  .balance {
    position: absolute;
    margin-top: 50px;
  }

  .divOptions {
    display: flex;
    margin-top: 35px;
    justify-content: space-evenly;
  }

  .btnTransf,
  .btnHist {
    text-align: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #35d2e7;
    background-color: #314586;
    border-radius: 5px;
    border: none;
    width: 150px;
  }

  .btnTransf:hover,
  .btnHist:hover {
    background-color: #35d2e7;
    color: #314586;
    transition: 400ms;
  }
`;
