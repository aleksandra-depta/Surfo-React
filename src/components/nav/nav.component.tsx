import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../features/authSlice";
import { openMobileMenu } from "../../features/navSlice";
import Cookies from "universal-cookie";
import IonIcon from "@reacticons/ionicons";
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
                          to=""
                          onClick={() => {
                            dispatch(openMobileMenu());
                          }}
                        >
                          <ImageUser
                            src={require(`../../img/${currentUser.photo}`)}
                            alt="User_photo"
                          />
                          <LinkNav to="" stickyNav={show}>
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
                              <IonIcon size="large" name="bookmark-outline" />
                            </Icon>
                          ) : (
                            <IconFav>
                              <IonIcon size="large" name="bookmark" />
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
                                onClick={() => {
                                  handleSubmit();
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
                              <IonIcon size="large" name="bookmark-outline" />
                            </Icon>
                          ) : (
                            <IconFav>
                              <IonIcon size="large" name="bookmark" />
                            </IconFav>
                          )}
                        </LinkNav>
                      </>
                    )}
                  </NavContent>
                ) : (
                  <NavContent>
                    <LinkNav to="/login" stickyNav={show} onClick={scrollToTop}>
                      Log In
                    </LinkNav>
                    <LinkNav
                      to="/signup"
                      stickyNav={show}
                      onClick={scrollToTop}
                    >
                      Sign Up
                    </LinkNav>
                  </NavContent>
                )}
                <LinkNav
                  to="/shoppingCart"
                  stickyNav={show}
                  onClick={scrollToTop}
                >
                  <Icon>
                    <IonIcon size="large" name="cart-outline" />
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
