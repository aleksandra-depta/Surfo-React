import MyAccountUserName from "./myAccountUserName.compoennt";
import MyAccountEmail from "./myAccountEmail.compoent";
import MyAccountPassword from "./myAccountPassword.compoent";
import MyAccountImage from "./myAccountImage.compoennt";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { Content, Headings } from "./myAccount.styles";

const MyAccount = () => {
  return (
    <>
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
        {/* <MyAccountImage /> */}
      </Content>
    </>
  );
};

export default MyAccount;
