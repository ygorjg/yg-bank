import { Container } from "./style";
import { Link, Navigate } from "react-router-dom";

const Dashboard = () => {
  const user = window.localStorage.getItem("@username");
  const token = window.localStorage.getItem("@token");

  const logout = () => {
    window.localStorage.clear();
  };

  return token ? (
    <Container>
      <header>
        <h1 className="logo">YG Bank</h1>
        <Link to="/login">
          <button onClick={logout} className="btnSair" type="button">
            SAIR
          </button>
        </Link>
      </header>
      <main>
        <div className="divGreetBalance">
          <p className="greeting">Olá, {user}!</p>
          <p className="balance">Seu balance atual: R$100,00</p>
        </div>
        <div className="divOptions">
          <button type="button" className="btnTransf">
            REALIZAR TRANSFERÊNCIA
          </button>
          <button type="button" className="btnHist">
            HISTÓRICO DE TRANSAÇÕES
          </button>
        </div>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Dashboard;
