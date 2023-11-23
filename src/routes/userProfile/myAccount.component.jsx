import MyAccountUserName from "./myAccountUserName.compoennt";
import MyAccountEmail from "./myAccountEmail.compoent";
import MyAccountPassword from "./myAccountPassword.compoent";
import MyAccountImage from "./myAccountImage.compoennt";

import { HeadingH2, TextSmall } from "../../styled/typography";
import {
  Container,
  Content,
  Headings,
  LogoContainer,
} from "./userProfile.styles";

const MyAccount = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <Headings>
        <HeadingH2> My account </HeadingH2>
        <TextSmall>
          Here you can view and update your user account. You can also manage
          your login options and password.
        </TextSmall>
      </Headings>
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
