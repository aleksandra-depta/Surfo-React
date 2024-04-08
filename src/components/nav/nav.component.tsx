import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../features/authSlice";
import { openMobileMenu } from "../../features/navSlice";
import { inActiveScrollToOffer } from "../../features/searchTabSlice";
import Cookies from "universal-cookie";
import IonIcon from "@reacticons/ionicons";
import MobileNav from "../navMobile/mobileNav.component";

import Container from "react-bootstrap/Container";
import {
  CartIcon,
  Icon,
  IconFav,
  ImageLogo,
  LinkNav,
  LinkNavUser,
  LinkNavUserName,
  Nav,
  NavContainer,
} from "./nav.styles";
import LogoWhite from "../../img/logoWhite.png";

const cookies = new Cookies();

const Navigation = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { cart } = useAppSelector((store) => store.cart);
  const { bookmarks } = useAppSelector((store) => store.bookmark);
  const { mobileNav, mobileNavContent } = useAppSelector((store) => store.nav);
  const dispatch = useAppDispatch();

  const [openNav, setOpenNav] = useState<boolean>(false);
  const [show, handleShow] = useState<boolean>(false);

  const handleSubmit = () => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <>
      <Nav stickyNav={show}>
        <Container>
          <NavContainer stickyNav={show}>
            <Link to="/">
              <ImageLogo
                src={LogoWhite}
                alt="Surfo logo"
                loading="lazy"
                onClick={scrollToTop}
              />
            </Link>
            {currentUser && (
              <LinkNav to="">
                <LinkNavUser to="/myAccount/user" onClick={scrollToTop}>
                  <span>Hi.</span>
                  <LinkNavUserName stickyNav={show}>
                    {currentUser.name.split(" ")[0]}
                  </LinkNavUserName>
                </LinkNavUser>
              </LinkNav>
            )}
            <LinkNav
              to="/offer"
              onClick={() => {
                scrollToTop();
                dispatch(inActiveScrollToOffer());
              }}
            >
              offer
            </LinkNav>
            {!currentUser && (
              <>
                <LinkNav to="/login" onClick={scrollToTop}>
                  Log In
                </LinkNav>
                <LinkNav to="/signup" onClick={scrollToTop}>
                  Sign Up
                </LinkNav>
              </>
            )}
            {currentUser && (
              <LinkNav to="/myAccount/favorites" onClick={scrollToTop}>
                {bookmarks.length === 0 ? (
                  <Icon>
                    <IonIcon size="large" name="bookmark-outline" />
                  </Icon>
                ) : (
                  <IconFav>
                    <IonIcon size="large" name="bookmark" />
                  </IconFav>
                )}
              </LinkNav>
            )}
            <LinkNav to="/shoppingCart" onClick={scrollToTop}>
              <Icon>
                <IonIcon size="large" name="cart-outline" />
              </Icon>
              {cart.length !== 0 && <CartIcon />}
            </LinkNav>
            {currentUser && (
              <LinkNav
                to="/"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Log out
              </LinkNav>
            )}
          </NavContainer>
        </Container>
      </Nav>
      {mobileNavContent && <MobileNav />}
      <Outlet />
    </>
  );
};

export default Navigation;
