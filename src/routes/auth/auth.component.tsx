import { Outlet } from "react-router-dom";
import Newsletters from "../../components/newsletter/newsletter.component";
import { AuthContainer } from "./auth.styles";

const AuthPage = () => {
  return (
    <AuthContainer>
      <Outlet />
      <Newsletters />
    </AuthContainer>
  );
};

export default AuthPage;
