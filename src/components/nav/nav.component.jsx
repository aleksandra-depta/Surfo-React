import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { openMobileMenu } from "../../features/navSlice";
import Cookies from "universal-cookie";

import MobileNav from "../navMobile/mobileNav.component";

import {
  BackgroundImage,
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
import BackgroundHeaderImgHalf from "../../img/hero-2000-half.jpg";

const cookies = new Cookies();

const Navigation = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.cart);
  const { bookmarks } = useSelector((store) => store.bookmark);
  const { mobileNav, mobileNavContent } = useSelector((store) => store.nav);

  const [openNav, setOpenNav] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  return (
    <>
      <BackgroundImage src={BackgroundHeaderImgHalf} />
      <Nav>
        <NavContent>
          <Link to="/">
            <ImageLogo src={`${Logo}`} alt="Surfo logo" />
          </Link>
          <LinkNav to="/offer">offer</LinkNav>
        </NavContent>
        <NavContent>
          {currentUser ? (
            <NavContent>
              {mobileNav ? (
                <>
                  <LinksUser
                    onClick={() => {
                      dispatch(openMobileMenu());
                    }}
                  >
                    <ImageUser
                      src={require(`../../img/${currentUser.photo}`)}
                      alt="User_photo"
                    />
                    {/* <LinkNav to="/myAccount/user"> */}
                    <LinkNav>{currentUser.name.split(" ")[0]}</LinkNav>
                  </LinksUser>
                  <LinkNav to="/myAccount/favorites">
                    {bookmarks.length === 0 ? (
                      <Icon>
                        <ion-icon
                          size="large"
                          name="bookmark-outline"
                        ></ion-icon>
                      </Icon>
                    ) : (
                      <IconFav>
                        <ion-icon size="large" name="bookmark"></ion-icon>
                      </IconFav>
                    )}
                  </LinkNav>
                </>
              ) : (
                <>
                  <NavMenu
                    active={openNav}
                    onMouseEnter={() => setOpenNav(true)}
                    onMouseLeave={() => setOpenNav(false)}
                  >
                    {openNav && (
                      <NavMenuContent>
                        <LinkNavMenu
                          to="/"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                        >
                          Log out
                        </LinkNavMenu>
                      </NavMenuContent>
                    )}
                    <LinksUser
                      onClick={() => {
                        setOpenNav(true);
                      }}
                      to="/myAccount/user"
                    >
                      <ImageUser
                        src={require(`../../img/${currentUser.photo}`)}
                        alt="User_photo"
                      />
                      <LinkNav to="/myAccount/user">
                        {currentUser.name.split(" ")[0]}
                      </LinkNav>
                    </LinksUser>
                  </NavMenu>
                  <LinkNav to="/myAccount/favorites">
                    {bookmarks.length === 0 ? (
                      <Icon>
                        <ion-icon
                          size="large"
                          name="bookmark-outline"
                        ></ion-icon>
                      </Icon>
                    ) : (
                      <IconFav>
                        <ion-icon size="large" name="bookmark"></ion-icon>
                      </IconFav>
                    )}
                  </LinkNav>
                </>
              )}
            </NavContent>
          ) : (
            <NavContent>
              <LinkNav to="/login">Log In</LinkNav>
              <LinkNav to="/signup">Sign Up</LinkNav>
            </NavContent>
          )}
          <LinkNav to="/shoppingCart">
            <Icon>
              <ion-icon size="large" name="cart-outline"></ion-icon>
            </Icon>
            {cart.length !== 0 && <CartIcon />}
          </LinkNav>
        </NavContent>
      </Nav>

      {mobileNavContent && <MobileNav />}
      <Outlet />
    </>
  );
};

export default Navigation;
