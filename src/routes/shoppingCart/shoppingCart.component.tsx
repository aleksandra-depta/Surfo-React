import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useAddBookingMutation } from "../../services/toursApi";
import { clearCart } from "../../features/cartSlice";
import IonIcon from "@reacticons/ionicons";

import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import LoginMessage from "../../components/loginMessage/loginMessage.component";
import ShoppingCartItem from "../../components/shoppingCartItem/shoppingCartItem.component";
import Footer from "../../components/footer/footer.component";

import { IconGrey } from "../../styled/icons";
import {
  HeadingH2,
  TextLargePrimary,
  TextSmall,
} from "../../styled/typography";
import {
  Button,
  Container,
  LogoCart,
  LogoContainer,
  ShopingCartContainer,
  TotalsContainer,
} from "./shoppingCart.styles";
import {
  Headings,
  MainContainer,
  Nav,
  NavLinkMyAccount,
} from "../userProfile/userProfile.styles";

const ShoppingCart = () => {
  const { cart, totalPrice } = useAppSelector((store) => store.cart);
  const { currentUser } = useAppSelector((store) => store.auth);

  const dispatch = useAppDispatch();

  const [addBooking] = useAddBookingMutation();

  const handleSubmit = () => {
    cart.map((tour) => {
      const formState = {
        travelers: tour.amount,
        user: currentUser?._id,
        tour: tour._id,
      };
      return addBooking(formState);
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <MainContainer>
        <Nav>
          <NavLinkMyAccount to="">
            <IonIcon size="large" name="cart-outline" />
          </NavLinkMyAccount>
        </Nav>
        <Container>
          <LogoContainer>
            <LogoCart
              src={require(`../../img/logo.png`)}
              alt="Surfo logo"
              loading="lazy"
            />
          </LogoContainer>
          <Headings>
            <HeadingH2> Shopping Cart </HeadingH2>
            <TextSmall>Adventure with us!</TextSmall>
          </Headings>
          {cart.length === 0 ? (
            <EmptyMessage message={"Your shopping cart is empty"} />
          ) : (
            <>
              <ShopingCartContainer>
                {cart.map((tour) => (
                  <ShoppingCartItem tour={tour} />
                ))}
              </ShopingCartContainer>
              <TotalsContainer>
                <IconGrey onClick={() => dispatch(clearCart())}>
                  <IonIcon size="large" name="trash-outline" />
                </IconGrey>
                <TotalsContainer>
                  <HeadingH2> Totals: </HeadingH2>
                  <TextLargePrimary>€{totalPrice}</TextLargePrimary>
                </TotalsContainer>
              </TotalsContainer>

              {currentUser ? (
                <>
                  <HeadingH2> Payment details </HeadingH2>
                  <TextSmall>Complete your payment details</TextSmall>
                  <form>
                    <TextSmall> ... </TextSmall>
                  </form>
                  <Button
                    to="/confirmation"
                    type="submit"
                    onClick={async () => {
                      try {
                        await handleSubmit();
                        dispatch(clearCart());
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  >
                    Confirm payment
                  </Button>
                </>
              ) : (
                <LoginMessage
                  message={
                    "Log in or sign up to complete your reservation and payment"
                  }
                />
              )}
            </>
          )}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ShoppingCart;
