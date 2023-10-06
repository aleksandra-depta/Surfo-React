import { Outlet, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { UserContext } from "../../contexts/user.context";
import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { LinksNavMyAccountContext } from "../../contexts/linksMyAcount.context";

import Cookies from "universal-cookie";

import { LinkWhite } from "../../styled/typography";
import { IconBookmark } from "../../styled/icons";
import {
  Icon,
  ImageLogo,
  ImageUser,
  LinkNav,
  LinkNavMenu,
  LinksUser,
  Nav,
  NavContent,
  NavMenu,
  NavMenuContent,
} from "./nav.styles";

import Logo from "../../img/logo.png";
import { useDispatch } from "react-redux";
import { calcTotals } from "../../features/cartSlice";

const cookies = new Cookies();

const Navigation = () => {
  const [openNav, setOpenNav] = useState();
  const dispatch = useDispatch();
  ///////////////////////////////////////
  const { currentUser } = useContext(UserContext);
  const { bookmarks, shoppingCart } = useContext(AddRemoveContext);
  const { activeLink } = useContext(LinksNavMyAccountContext);

  const bookmarksFiltered = bookmarks.filter((bookmark) => bookmark !== "");
  const shoppingCartFiltered = shoppingCart.filter((item) => item !== "");

  const handleSubmit = async (e) => {
    cookies.remove("jwt", { path: "/" });
    window.location.reload();
  };

  return (
    <>
      <Nav>
        <NavContent>
          <Link to="/">
            <ImageLogo src={`${Logo}`} alt="Surfo logo" />
          </Link>
          <LinkNav to="/offer">Our offer</LinkNav>
        </NavContent>
        <NavContent>
          {currentUser ? (
            <NavContent>
              <NavMenu active={openNav}>
                <LinksUser
                  onClick={() => {
                    setOpenNav(!openNav);
                    activeLink("/myAccount");
                  }}
                >
                  <ImageUser
                    src={require(`../../img/${currentUser.photo}`)}
                    alt="User_photo"
                  />
                  <LinkNav>{currentUser.name}</LinkNav>
                </LinksUser>
                {openNav && (
                  <NavMenuContent>
                    <LinkNavMenu to="/myAccount"> My Account</LinkNavMenu>
                    <LinkNavMenu onClick={(e) => handleSubmit(e)}>
                      Log out
                    </LinkNavMenu>
                  </NavMenuContent>
                )}
              </NavMenu>
              <LinkNav
                to="/myAccount/favorites"
                onClick={() => activeLink("/myAccount/favorites")}
              >
                <Icon>
                  {bookmarksFiltered.length === 0 ? (
                    <IconBookmark>
                      <ion-icon size="large" name="bookmark-outline"></ion-icon>
                    </IconBookmark>
                  ) : (
                    <IconBookmark>
                      <ion-icon size="large" name="bookmark"></ion-icon>
                    </IconBookmark>
                  )}
                </Icon>
              </LinkNav>
            </NavContent>
          ) : (
            <NavContent>
              <LinkNav to="/login">Log In</LinkNav>
              <LinkNav to="/signup">Sign Up</LinkNav>
            </NavContent>
          )}
          <Icon>
            <LinkWhite to="/shoppingCart">
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </LinkWhite>
          </Icon>
        </NavContent>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
