import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { openMobileMenu } from "../../features/navSlice";
import Cookies from "universal-cookie";

import MobileNav from "../navMobile/mobileNav.component";

import Container from "react-bootstrap/Container";
import {
  BackgroundImage,
  CartIcon,
  Content,
  Icon,
  IconFav,
  ImageLogo,
  ImageUser,
  LinkNav,
  LinkNavMenu,
  LinksUser,
  Nav,
  NavContainer,
  NavContent,
  NavMenu,
  NavMenuContent,
} from "./nav.styles";

import Logo from "../../img/logo.png";
import BackgroundHeaderImgHalf from "../../img/hero-2000-half.png";

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

  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, left: 0 });
  };

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <>
      <BackgroundImage src={BackgroundHeaderImgHalf} />
      <NavContainer>
        <Nav stickyNav={show}>
          <Container>
            <Content>
              <NavContent>
                <Link to="/">
                  <ImageLogo src={`${Logo}`} alt="Surfo logo" />
                </Link>
                <LinkNav stickyNav={show} to="/offer" onClick={scrollToTop}>
                  offer
                </LinkNav>
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
                          <LinkNav stickyNav={show}>
                            {currentUser.name.split(" ")[0]}
                          </LinkNav>
                        </LinksUser>
                        <LinkNav
                          to="/myAccount/favorites"
                          stickyNav={show}
                          onClick={scrollToTop}
                        >
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
                              scrollToTop();
                            }}
                            to="/myAccount/user"
                          >
                            <ImageUser
                              src={require(`../../img/${currentUser.photo}`)}
                              alt="User_photo"
                            />
                            <LinkNav
                              stickyNav={show}
                              to="/myAccount/user"
                              onClick={scrollToTop}
                            >
                              {currentUser.name.split(" ")[0]}
                            </LinkNav>
                          </LinksUser>
                        </NavMenu>
                        <LinkNav
                          stickyNav={show}
                          to="/myAccount/favorites"
                          onClick={scrollToTop}
                        >
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
                    <LinkNav stickyNav={show} to="/login" onClick={scrollToTop}>
                      Log In
                    </LinkNav>
                    <LinkNav
                      stickyNav={show}
                      to="/signup"
                      onClick={scrollToTop}
                    >
                      Sign Up
                    </LinkNav>
                  </NavContent>
                )}
                <LinkNav
                  stickyNav={show}
                  to="/shoppingCart"
                  onClick={scrollToTop}
                >
                  <Icon>
                    <ion-icon size="large" name="cart-outline"></ion-icon>
                  </Icon>
                  {cart.length !== 0 && <CartIcon />}
                </LinkNav>
              </NavContent>
            </Content>
          </Container>
        </Nav>
        {mobileNavContent && <MobileNav />}
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
