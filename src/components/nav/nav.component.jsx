import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { navHomeActive, navHomeInactive } from "../../features/navSlice";
import Cookies from "universal-cookie";

import {
  CartIcon,
  Icon,
  IconFav,
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

const cookies = new Cookies();

const Navigation = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const { navHome } = useSelector((store) => store.nav);
  const { cart } = useSelector((store) => store.cart);
  const { bookmarks } = useSelector((store) => store.bookmark);

  const [openNav, setOpenNav] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  return (
    <>
      <Nav>
        <NavContent>
          <Link to="/" onClick={() => dispatch(navHomeActive())} home={navHome}>
            <ImageLogo src={`${Logo}`} alt="Surfo logo" />
          </Link>
          <LinkNav
            to="/offer"
            onClick={() => dispatch(navHomeInactive())}
            home={navHome}
          >
            Our offer
          </LinkNav>
        </NavContent>
        <NavContent>
          {currentUser ? (
            <NavContent>
              <NavMenu
                active={openNav}
                onMouseEnter={() => setOpenNav(true)}
                onMouseLeave={() => setOpenNav(false)}
              >
                <LinksUser
                  onClick={() => {
                    setOpenNav(true);
                  }}
                >
                  <ImageUser
                    src={require(`../../img/${currentUser.photo}`)}
                    alt="User_photo"
                  />
                  <LinkNav
                    home={navHome}
                    onClick={() => dispatch(navHomeInactive())}
                  >
                    {currentUser.name.split(" ")[0]}
                  </LinkNav>
                </LinksUser>
                {openNav && (
                  <NavMenuContent>
                    <LinkNavMenu
                      to="/myAccount/user"
                      home={navHome}
                      onClick={() => dispatch(navHomeInactive())}
                    >
                      My Account
                    </LinkNavMenu>
                    <LinkNavMenu
                      to="/"
                      onClick={(e) => {
                        handleSubmit(e);
                        dispatch(navHomeActive());
                      }}
                    >
                      Log out
                    </LinkNavMenu>
                  </NavMenuContent>
                )}
              </NavMenu>
              <LinkNav
                to="/myAccount/favorites"
                home={navHome}
                onClick={() => dispatch(navHomeInactive())}
              >
                {bookmarks.length === 0 ? (
                  <Icon>
                    <ion-icon size="large" name="bookmark-outline"></ion-icon>
                  </Icon>
                ) : (
                  <IconFav>
                    <ion-icon size="large" name="bookmark"></ion-icon>
                  </IconFav>
                )}
              </LinkNav>
            </NavContent>
          ) : (
            <NavContent>
              <LinkNav
                to="/login"
                home={navHome}
                onClick={() => dispatch(navHomeInactive())}
              >
                Log In
              </LinkNav>
              <LinkNav
                to="/signup"
                home={navHome}
                onClick={() => dispatch(navHomeInactive())}
              >
                Sign Up
              </LinkNav>
            </NavContent>
          )}
          <LinkNav
            to="/shoppingCart"
            home={navHome}
            onClick={() => dispatch(navHomeInactive())}
          >
            <Icon>
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </Icon>
            {cart.length !== 0 && <CartIcon />}
          </LinkNav>
        </NavContent>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
