import { useAppDispatch } from "../../hooks";
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
      <ImageLogo alt="Surfo" src={`${Logo}`} />

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
        <LinkItem to="/myAccount/user" onClick={() => goToPage()}>
          My Account
        </LinkItem>
        <LinkItem to="/myAccount/booking" onClick={() => goToPage()}>
          My Booking
        </LinkItem>
        <LinkItem to="/myAccount/favorites" onClick={() => goToPage()}>
          My Favorites
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
