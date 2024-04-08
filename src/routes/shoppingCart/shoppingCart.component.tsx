import { useEffect, useState } from "react";
import { Tours } from "../../models/tours";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useAddBookingMutation } from "../../services/toursApi";
import { clearCart } from "../../features/cartSlice";
import IonIcon from "@reacticons/ionicons";

import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import LoginMessage from "../../components/loginMessage/loginMessage.component";
import ShoppingCartItem from "../../components/shoppingCartItem/shoppingCartItem.component";
import Footer from "../../components/footer/footer.component";
import Newsletters from "../../components/newsletter/newsletter.component";
import LocationSection from "../../components/locationsSection/locationsSection.component";

import { IconGrey } from "../../styled/icons";
import {
  HeadingH1,
  HeadingH2,
  TextMedium,
  TextSmall,
} from "../../styled/typography";
import {
  CartContainer,
  Container,
  Content,
  IconRemove,
  PaymentButton,
  PaymentContainer,
  ShopingCartContainer,
  TotalsContainer,
} from "./shoppingCart.styles";

import HalfSliderSection from "../../components/halfSliderSection/halfSliderSection.component";

const ShoppingCart = ({ tours }: { tours: Tours }) => {
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
      <Container>
        <Content>
          <div>
            <HeadingH2> Shopping Cart </HeadingH2>
            <HeadingH2>Adventure with us!</HeadingH2>
          </div>
          {cart.length === 0 ? (
            <>
              <EmptyMessage message={"Your shopping cart is empty"} />
            </>
          ) : (
            <>
              <CartContainer>
                <ShopingCartContainer>
                  {cart.map((tour) => (
                    <ShoppingCartItem tour={tour} />
                  ))}
                  <IconRemove>
                    <IconGrey onClick={() => dispatch(clearCart())}>
                      <IonIcon size="large" name="close-outline" />
                      <TextMedium>Remove all</TextMedium>
                    </IconGrey>
                  </IconRemove>
                </ShopingCartContainer>
                <TotalsContainer>
                  <HeadingH2> Totals: </HeadingH2>
                  <HeadingH1>€{totalPrice}</HeadingH1>
                </TotalsContainer>
              </CartContainer>

              {currentUser ? (
                <PaymentContainer>
                  <HeadingH2> Payment details </HeadingH2>
                  <TextSmall>Complete your payment details</TextSmall>
                  <form>
                    <TextSmall> ... </TextSmall>
                  </form>
                  <PaymentButton
                    to="/confirmation"
                    type="submit"
                    onClick={async () => {
                      try {
                        await handleSubmit();
                        dispatch(clearCart());
                        window.scrollTo({ top: 0, left: 0 });
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  >
                    Confirm payment
                  </PaymentButton>
                </PaymentContainer>
              ) : (
                <LoginMessage
                  message={
                    "Log in or sign up to complete your reservation and payment"
                  }
                />
              )}
            </>
          )}
          <HalfSliderSection tours={tours} />
        </Content>
      </Container>
      <LocationSection />
      <Newsletters />
      <Footer />
    </>
  );
};

export default ShoppingCart;
