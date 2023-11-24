import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import { closeMobileMenu } from "../../features/navSlice";
import Cookies from "universal-cookie";

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
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    cookies.remove("jwt", { path: "/" });
    dispatch(logout());
  };

  const goToPage = (e) => {
    dispatch(closeMobileMenu());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Cointainer>
      <ImageLogo alt="Surfo" src={`${Logo}`} />

      <IconClose onClick={(e) => goToPage()}>
        <ion-icon size="large" name="close-outline"></ion-icon>
      </IconClose>

      <Content>
        <LinkItem to="/" onClick={(e) => goToPage()}>
          Home Page
        </LinkItem>
        <LinkItem to="/offer" onClick={(e) => goToPage()}>
          Our offer
        </LinkItem>
        <LinkItem to="/myAccount/user" onClick={(e) => goToPage()}>
          My Account
        </LinkItem>
        <LinkItem to="/myAccount/booking" onClick={(e) => goToPage()}>
          My Booking
        </LinkItem>
        <LinkItem to="/myAccount/favorites" onClick={(e) => goToPage()}>
          My Favorites
        </LinkItem>
        <LinkItem
          to="/"
          onClick={(e) => {
            handleSubmit(e);
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
