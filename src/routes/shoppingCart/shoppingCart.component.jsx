import { useContext, useState } from "react";

import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../../contexts/user.context";

import Footer from "../../components/footer/footer.component";
import ShoppingCartItem from "../../components/shoppingCartItem/shoppingCartItem.component";

import axios from "axios";
import Cookies from "universal-cookie";

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
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import { useDispatch, useSelector } from "react-redux";
import { IconGrey } from "../../styled/icons";
import { Row } from "react-bootstrap";
import { clearCart } from "../../features/cartSlice";

const cookies = new Cookies();

const ShoppingCart = () => {
  const { cart, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const [payment, setPayment] = useState(false);
  const {
    shoppingCart,
    setShoppingCart,
    controlItemToShoppingCart,
    addItemToCart,
    removeItemToCart,
    items,
    setItems,
  } = useContext(AddRemoveContext);
  const { currentUser } = useContext(UserContext);

  let shoppingCartFiltered = shoppingCart.filter(
    (shoppingCart) => shoppingCart !== ""
  );

  const controlPaymentPage = () => {
    setShoppingCart([]);
    setItems([]);
    const token = cookies.get("jwt");

    items.map((el) =>
      axios
        .post(
          `http://127.0.0.1:4000/api/v1/booking`,
          {
            travelers: `${el.quantity}`,
            tour: `${el._id}`,
            user: `${currentUser._id}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          console.log("success");
          setPayment(true);
        })
    );
  };
  // const totals = items
  //   .map((item) => item.price * item.quantity)
  //   .reduce((acc, cur) => acc + cur, 0);
  // const bookingCode = Math.floor(Math.random() * 1000000) + 10000;

  return (
    <>
      <Container>
        <LogoContainer>
          <LogoCart src={require(`../../img/logo.png`)} alt="Surfo logo" />
        </LogoContainer>
        <HeadingH2> Shopping Cart </HeadingH2>
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
                <ion-icon size="large" name="trash-outline"></ion-icon>
              </IconGrey>
              <TotalsContainer>
                <HeadingH2> Totals: </HeadingH2>
                <TextLargePrimary>€{totalPrice}</TextLargePrimary>
              </TotalsContainer>
            </TotalsContainer>
            <HeadingH2> Payment details </HeadingH2>
            <TextSmall>Complete your payment details</TextSmall>
            <form>
              <TextSmall> ... </TextSmall>
            </form>
            <Button to="/confirmation" onClick={controlPaymentPage}>
              Confirm payment
            </Button>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;
