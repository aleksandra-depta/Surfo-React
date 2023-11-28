import { ButtonPrimary } from "../../styled/buttons";
import { HeadingH3 } from "../../styled/typography";
import { InfoContainer } from "./loginMessage.styles";

const LoginMessage = ({ message }) => {
  return (
    <InfoContainer>
      <HeadingH3>{message}</HeadingH3>
      <ButtonPrimary to="/login">Click here</ButtonPrimary>
    </InfoContainer>
  );
};

export default LoginMessage;
