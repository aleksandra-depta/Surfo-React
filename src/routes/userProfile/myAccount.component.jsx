import MyAccountUserName from "./myAccountUserName.compoennt";
import MyAccountEmail from "./myAccountEmail.compoent";
import MyAccountPassword from "./myAccountPassword.compoent";
import MyAccountImage from "./myAccountImage.compoennt";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { Container, Content, LogoContainer } from "./userProfile.styles";
import { Col } from "react-bootstrap";

const MyAccount = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <Col>
        <HeadingH2> My account </HeadingH2>
        <TextSmall>
          Here you can view and update your user account. You can also manage
          your login options and password.
        </TextSmall>
      </Col>
      <Content>
        <MyAccountUserName />
        <MyAccountEmail />
        <MyAccountPassword />
        <MyAccountImage />
      </Content>
    </Container>
  );
};

export default MyAccount;
