import { useAppSelector } from "../../hooks";
import { Link } from "react-router-dom";
import { HeadingH1, TextMedium } from "../../styled/typography";
import { ButtonBlack, ButtonRawWhite } from "../../styled/buttons";
import { ButtonsContent, Content, LogoImage } from "./authLoggedIn.styles";
import Logo from "../../img/logo.png";

const LoggedIn = () => {
  const { currentUser } = useAppSelector((store) => store.auth);

  return (
    <Content user={currentUser ? true : false}>
      <Link to="/">
        <LogoImage src={Logo} alt="Logo" loading="lazy" />
      </Link>
      <>
        <HeadingH1>Welcome</HeadingH1>
        <TextMedium>Adventure with us</TextMedium>
      </>
      <ButtonsContent>
        <ButtonBlack to="/myAccount/user">My account</ButtonBlack>
        <ButtonRawWhite to="/offer">Our offer</ButtonRawWhite>
      </ButtonsContent>
    </Content>
  );
};

export default LoggedIn;
