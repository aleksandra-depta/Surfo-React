import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../features/authSlice";
import { closeMobileMenu } from "../../features/navSlice";
import Cookies from "universal-cookie";
import IonIcon from "@reacticons/ionicons";

import {
  Cointainer,
  Content,
  IconClose,
  ImageLogo,
  LinkItem,
} from "./mobileNav.styles";
import Logo from "../../img/logo.png";

const cookies = new Cookies();

const MobileNav = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  const goToPage = () => {
    dispatch(closeMobileMenu());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Cointainer>
      <ImageLogo alt="Surfo" src={`${Logo}`} loading="lazy" />

      <IconClose onClick={() => goToPage()}>
        <IonIcon size="large" name="close-outline" />
      </IconClose>

      <Content>
        <LinkItem to="/" onClick={() => goToPage()}>
          Home Page
        </LinkItem>
        <LinkItem to="/offer" onClick={() => goToPage()}>
          Our offer
        </LinkItem>
        {currentUser && (
          <>
            <LinkItem to="/myAccount/user" onClick={() => goToPage()}>
              My Account
            </LinkItem>
            <LinkItem to="/myAccount/booking" onClick={() => goToPage()}>
              My Booking
            </LinkItem>
            <LinkItem to="/myAccount/favorites" onClick={() => goToPage()}>
              My Favorites
            </LinkItem>
          </>
        )}
        <LinkItem to="/shoppingCart" onClick={() => goToPage()}>
          Shopping Cart
        </LinkItem>
        <LinkItem
          to="/"
          onClick={() => {
            handleSubmit();
            goToPage();
          }}
        >
          Log out
        </LinkItem>
      </Content>
    </Cointainer>
  );
};

export default MobileNav;
