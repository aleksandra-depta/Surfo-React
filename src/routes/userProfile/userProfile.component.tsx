import { Outlet } from "react-router-dom";
import { linksMyAccount } from "../../services/dataNavMyAccount";
import Footer from "../../components/footer/footer.component";
import LocationSection from "../../components/locationsSection/locationsSection.component";
import Newsletters from "../../components/newsletter/newsletter.component";

import {
  Container,
  MainContainer,
  Nav,
  NavLinkMyAccount,
} from "./userProfile.styles";

const UserProfile = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <Nav>
            {linksMyAccount.map((el) => (
              <NavLinkMyAccount to={el.linkTo}>{el.title}</NavLinkMyAccount>
            ))}
          </Nav>
          <Outlet />
        </Container>
      </MainContainer>
      <LocationSection />
      <Newsletters />
      <Footer />
    </>
  );
};

export default UserProfile;
