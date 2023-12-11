import { Link } from "react-router-dom";

import { HeadingH1, LinkPrimary, TextMedium } from "../../styled/typography";
import { ButtonPrimary } from "../../styled/buttons";
import { Content, LoggedInContent } from "./auth.styles";

import Logo from "../../img/logo.png";

const LoggedIn = () => {
  return (
    <Content>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <LoggedInContent>
        <HeadingH1>Welcome</HeadingH1>
        <TextMedium>Adventure with us</TextMedium>
        <LinkPrimary to="/offer">Our offer</LinkPrimary>
        <ButtonPrimary to="/myAccount/user">My account</ButtonPrimary>
      </LoggedInContent>
    </Content>
  );
};

export default LoggedIn;
