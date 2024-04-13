import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import { AuthContainer } from "./auth.styles";

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
