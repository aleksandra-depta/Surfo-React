import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { LinksNavMyAccountContext } from "../../contexts/linksMyAcount.context";

import Logo from "../../img/logo.png";
import Cookies from "universal-cookie";

import { LinkWhite } from "../../styled/typography";
import { IconBookmark } from "../../styled/icons";
import { ImageLogo, ImageUser, Nav, NavContent } from "./nav.styles";

const cookies = new Cookies();

const Navigation = () => {
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
          <LinkWhite to="/offer">Our offer</LinkWhite>
        </NavContent>
        <NavContent>
          {currentUser ? (
            <NavContent>
              <LinkWhite
                to="/myAccount"
                // className={`nav__link nav__right--links nav__user ${
                //   window.location.pathname === "/" ? "" : "sticky"
                // }`}
                onClick={() => activeLink("/myAccount")}
              >
                <ImageUser
                  src={require(`../../img/${currentUser.photo}`)}
                  className="nav__userPhoto"
                  alt="User_photo"
                />
                <LinkWhite>{currentUser.name}</LinkWhite>
              </LinkWhite>
              <LinkWhite
                onClick={(e) => handleSubmit(e)}
                // className={`nav__link nav__right--links ${
                //   window.location.pathname === "/" ? "" : "sticky"
                // }`}
              >
                Log out
              </LinkWhite>
              <LinkWhite
                to="/myAccount/favorites"
                // className={`nav__btn ${
                //   window.location.pathname === "/" ? "" : "sticky"
                // }`}
                onClick={() => activeLink("/myAccount/favorites")}
              >
                {bookmarksFiltered.length === 0 ? (
                  <IconBookmark>
                    <ion-icon size="large" name="bookmark-outline"></ion-icon>
                  </IconBookmark>
                ) : (
                  <IconBookmark>
                    <ion-icon size="large" name="bookmark"></ion-icon>
                  </IconBookmark>
                )}
              </LinkWhite>
            </NavContent>
          ) : (
            <NavContent>
              <LinkWhite
                to="/login"
                // className={`nav__link nav__right--links ${
                //   window.location.pathname === "/" ? "" : "sticky"
                // }`}
              >
                Log In
              </LinkWhite>
              <LinkWhite
                to="/signup"
                // className={`nav__link nav__right--links ${
                //   window.location.pathname === "/" ? "" : "sticky"
                // }`}
              >
                Sign Up
              </LinkWhite>
            </NavContent>
          )}
          <LinkWhite
            to="/shoppingCart"
            // className={`nav__btn ${
            //   window.location.pathname === "/" ? "" : "sticky"
            // }`}
          >
            <div
            // className={`icon icon__save--nav ${
            //   shoppingCartFiltered.length === 0
            //     ? ""
            //     : "icon__shoppingCart--active"
            // }`}
            >
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </div>
          </LinkWhite>
        </NavContent>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
