import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../features/authSlice";
import { inActiveScrollToOffer } from "../../features/searchTabSlice";
import Cookies from "universal-cookie";
import IonIcon from "@reacticons/ionicons";

import Container from "react-bootstrap/Container";
import {
  CartIcon,
  Content,
  Icon,
  IconFav,
  ImageLogo,
  LinkContainer,
  LinkNav,
  LinkNavUserName,
  Nav,
  NavContainer,
} from "./nav.styles";
import LogoWhite from "../../img/logoWhite.png";
import { openMobileMenu } from "../../features/navSlice";
import MobileNav from "../navMobile/mobileNav.component";

const cookies = new Cookies();

const Navigation = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { cart } = useAppSelector((store) => store.cart);
  const { bookmarks } = useAppSelector((store) => store.bookmark);
  const { mobileNavContent } = useAppSelector((store) => store.nav);
  const dispatch = useAppDispatch();

  const [show, handleShow] = useState<boolean>(false);

  const [linkAccount, setLinkAccount] = useState<boolean>(
    window.innerWidth >= 576 ? false : true
  );
  const [linkMenu, setLinkMenu] = useState<boolean>(false);
  const [linkLogin, setLinkLogin] = useState<boolean>(false);
  const [linkSignUp, setLinkSignUp] = useState<boolean>(false);
  const [linkLogOut, setLinkLogOut] = useState<boolean>(false);

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
          <Content stickyNav={show}>
            <LinkContainer>
              <Link to="/">
                <ImageLogo
                  src={LogoWhite}
                  alt="Surfo logo"
                  loading="lazy"
                  onClick={scrollToTop}
                />
              </Link>
            </LinkContainer>
            <NavContainer stickyNav={show}>
              {currentUser && (
                <LinkContainer stickyNav={show}>
                  <LinkNav
                    to="/myAccount/user"
                    onClick={scrollToTop}
                    onMouseOver={() => {
                      setLinkAccount(window.innerWidth >= 576 ? true : false);
                    }}
                    onMouseOut={() => {
                      setLinkAccount(window.innerWidth >= 576 ? false : false);
                    }}
                  >
                    {!linkAccount && show === false && (
                      <Icon>
                        <IonIcon size="large" name="person-circle-outline" />
                      </Icon>
                    )}
                    {linkAccount && !show && <span>Hi.</span>}
                    {show && (
                      <>
                        <span>Hi.</span>
                        <LinkNavUserName stickyNav={show}>
                          {currentUser.name.split(" ")[0]}
                        </LinkNavUserName>
                      </>
                    )}
                  </LinkNav>
                </LinkContainer>
              )}
              {window.innerWidth >= 576 ? (
                <>
                  <LinkContainer stickyNav={show}>
                    <LinkNav
                      to="/offer"
                      onClick={() => {
                        scrollToTop();
                        dispatch(inActiveScrollToOffer());
                      }}
                      onMouseOver={() => {
                        setLinkMenu(true);
                      }}
                      onMouseOut={() => {
                        setLinkMenu(false);
                      }}
                    >
                      {!linkMenu && show === false && (
                        <Icon>
                          <IonIcon size="large" name="menu" />
                        </Icon>
                      )}
                      {linkMenu && !show && <span>offer</span>}
                      {show && (
                        <>
                          <Icon>
                            <IonIcon size="large" name="menu" />
                          </Icon>
                          offer
                        </>
                      )}
                    </LinkNav>
                  </LinkContainer>

                  {!currentUser && (
                    <>
                      <LinkContainer stickyNav={show}>
                        <LinkNav
                          to="/login"
                          onClick={() => {
                            scrollToTop();
                          }}
                          onMouseOver={() => {
                            setLinkLogin(true);
                          }}
                          onMouseOut={() => {
                            setLinkLogin(false);
                          }}
                        >
                          {!linkLogin && show === false && (
                            <Icon>
                              <IonIcon size="large" name="log-in-outline" />
                            </Icon>
                          )}
                          {linkLogin && !show && <span>log in</span>}
                          {show && (
                            <>
                              <Icon>
                                <IonIcon size="large" name="log-in-outline" />
                              </Icon>
                              log in
                            </>
                          )}
                        </LinkNav>
                      </LinkContainer>

                      <LinkContainer stickyNav={show}>
                        <LinkNav
                          to="/signup"
                          onClick={() => {
                            scrollToTop();
                          }}
                          onMouseOver={() => {
                            setLinkSignUp(true);
                          }}
                          onMouseOut={() => {
                            setLinkSignUp(false);
                          }}
                        >
                          {!linkSignUp && show === false && (
                            <Icon>
                              <IonIcon size="large" name="add-circle-outline" />
                            </Icon>
                          )}
                          {linkSignUp && !show && <span> sign up</span>}
                          {show && (
                            <>
                              <Icon>
                                <IonIcon
                                  size="large"
                                  name="add-circle-outline"
                                />
                              </Icon>
                              sign up
                            </>
                          )}
                        </LinkNav>
                      </LinkContainer>
                    </>
                  )}
                  {currentUser && (
                    <LinkContainer stickyNav={show}>
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
                    </LinkContainer>
                  )}
                  <LinkContainer stickyNav={show}>
                    <LinkNav to="/shoppingCart" onClick={scrollToTop}>
                      <Icon>
                        <IonIcon size="large" name="cart-outline" />
                        {cart.length !== 0 && <CartIcon />}
                      </Icon>
                    </LinkNav>
                  </LinkContainer>
                  {currentUser && (
                    <LinkContainer stickyNav={show}>
                      <LinkNav
                        to="/"
                        onClick={() => {
                          handleSubmit();
                        }}
                        onMouseOver={() => {
                          setLinkLogOut(true);
                        }}
                        onMouseOut={() => {
                          setLinkLogOut(false);
                        }}
                      >
                        {!linkLogOut && show === false && (
                          <Icon>
                            <IonIcon size="large" name="log-out" />
                          </Icon>
                        )}
                        {linkLogOut && !show && <span> log out</span>}
                        {show && (
                          <>
                            <Icon>
                              <IonIcon size="large" name="log-out" />
                            </Icon>
                            log out
                          </>
                        )}
                      </LinkNav>
                    </LinkContainer>
                  )}
                </>
              ) : (
                <LinkNav to="/" onClick={() => dispatch(openMobileMenu())}>
                  <IonIcon size="large" name="menu" />
                </LinkNav>
              )}
            </NavContainer>
          </Content>
        </Container>
      </Nav>
      {mobileNavContent && <MobileNav />}
      <Outlet />
    </>
  );
};

export default Navigation;
