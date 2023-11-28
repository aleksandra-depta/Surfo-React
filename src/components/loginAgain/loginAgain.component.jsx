import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import Cookies from "universal-cookie";

import { ButtonSecondary } from "../../styled/buttons";
import { TextSmall } from "../../styled/typography";
import { Container, Content, ImageLogo } from "./loginAgain.styles";

import Logo from "../../img/logo.png";

const cookies = new Cookies();

const LoginAgain = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  return (
    <Container>
      <Content>
        <ImageLogo alt="Surfo" src={`${Logo}`} />
        <TextSmall>
          Your password has been successfully changed. Please log in again.
        </TextSmall>
        <ButtonSecondary
          to="/login"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Log in again
        </ButtonSecondary>
      </Content>
    </Container>
  );
};

export default LoginAgain;
