import { useAppDispatch } from "../../hooks";
import { logout } from "../../features/authSlice";
import Cookies from "universal-cookie";

import { ButtonSecondary } from "../../styled/buttons";
import { TextSmall } from "../../styled/typography";
import { Container, Content, ImageLogo } from "./loginAgain.styles";

import Logo from "../../img/logo.png";

const cookies = new Cookies();

const LoginAgain = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  return (
    <Container>
      <Content>
        <ImageLogo alt="Surfo" src={`${Logo}`} loading="lazy" />
        <TextSmall>
          Your password has been successfully changed. Please log in again.
        </TextSmall>
        <ButtonSecondary
          to="/login"
          onClick={() => {
            handleSubmit();
          }}
        >
          Log in again
        </ButtonSecondary>
      </Content>
    </Container>
  );
};

export default LoginAgain;
