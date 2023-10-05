import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { LinksNavMyAccountContext } from "../../contexts/linksMyAcount.context";
import { linksMyAccount } from "../../contexts/linksMyAcount.context";

import { LinkActive, LinkInactive, Nav } from "./userProfile.styles";
import Footer from "../../components/footer/footer.component";

const UserProfile = () => {
  const { link, activeLink } = useContext(LinksNavMyAccountContext);

  return (
    <>
      <Nav>
        {linksMyAccount.map((el) =>
          link === el.linkTo ? (
            <LinkActive to={el.linkTo} onClick={() => activeLink(el.linkTo)}>
              {el.title}
            </LinkActive>
          ) : (
            <LinkInactive to={el.linkTo} onClick={() => activeLink(el.linkTo)}>
              {el.title}
            </LinkInactive>
          )
        )}
      </Nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default UserProfile;
