import { Link } from "react-router-dom";

import {
  HeadingH1,
  LinkPrimary,
  TextMedium,
} from "../../styled/typography";
import { ButtonPrimary } from "../../styled/buttons";
import { Content } from "./auth.styles";

import Logo from "../../img/logo.png";

const LoggedIn = () => {
  return (
    <Content>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <HeadingH1>Welcome</HeadingH1>
      <TextMedium>Adventure with us</TextMedium>
      <LinkPrimary to="/offer">Our offer</LinkPrimary>
      <ButtonPrimary to="/myAccount">My account</ButtonPrimary>
    </Content>
  );
};

export default LoggedIn;
