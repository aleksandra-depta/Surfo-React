import { useAppDispatch } from "../../hooks";
import { logout } from "../../features/authSlice";
import Logo from "../../img/logo.png";
import { ButtonBlack } from "../../styled/buttons";
import { TextSmall } from "../../styled/typography";
import { Container, Content, ImageLogo } from "./loginAgain.styles";
import Cookies from "universal-cookie";

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
        <ButtonBlack
          to="/login"
          onClick={() => {
            handleSubmit();
          }}
        >
          Log in again
        </ButtonBlack>
      </Content>
    </Container>
  );
};

export default LoginAgain;
