import { ButtonPrimary } from "../../styled/buttons";
import { HeadingH3 } from "../../styled/typography";
import { InfoContainer } from "./loginMessage.styles";

const LoginMessage = ({ message }: { message: string }) => {
  return (
    <InfoContainer>
      <HeadingH3>{message}</HeadingH3>
      <ButtonPrimary
        to="/login"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0 });
        }}
      >
        Click here
      </ButtonPrimary>
    </InfoContainer>
  );
};

export default LoginMessage;
