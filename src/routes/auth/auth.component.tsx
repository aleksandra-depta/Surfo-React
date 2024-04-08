import { Outlet } from "react-router-dom";
import { AuthContainer } from "./auth.styles";
import Footer from "../../components/footer/footer.component";

const AuthPage = () => {
  return (
    <>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
      <Footer />
    </>
  );
};

export default AuthPage;
