import MainRoutes from "./routes";
import Global from "./styles/global";
import AuthProvider from "./contexts/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Global />
        <MainRoutes />
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
