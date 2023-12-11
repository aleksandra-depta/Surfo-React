import { Outlet } from "react-router-dom";
import { linksMyAccount } from "../../services/dataNavMyAccount";
import Footer from "../../components/footer/footer.component";

import { MainContainer, Nav, NavLinkMyAccount } from "./userProfile.styles";

const UserProfile = () => {
  return (
    <>
      <MainContainer>
        <Nav>
          {linksMyAccount.map((el) => (
            <NavLinkMyAccount to={el.linkTo}>{el.title}</NavLinkMyAccount>
          ))}
        </Nav>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default UserProfile;
