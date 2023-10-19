import { Outlet } from "react-router-dom";
import { linksMyAccount } from "../../services/dataNavMyAccount";
import Footer from "../../components/footer/footer.component";

import { Nav, NavLinkMyAccount } from "./userProfile.styles";

const UserProfile = () => {
  return (
    <>
      <Nav>
        {linksMyAccount.map((el) => (
          <NavLinkMyAccount to={el.linkTo}>{el.title}</NavLinkMyAccount>
        ))}
      </Nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default UserProfile;
