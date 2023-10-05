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

const cookies = new Cookies();

const ShoppingCart = ({ tours }) => {
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
  const totals = items
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);
  const bookingCode = Math.floor(Math.random() * 1000000) + 10000;

  return (
    <>
      <Container>
        <LogoContainer>
          <LogoCart src={require(`../../img/logo.png`)} alt="Surfo logo" />
        </LogoContainer>
        <HeadingH2> Shopping Cart </HeadingH2>
        {shoppingCartFiltered.length === 0 ? (
          <EmptyMessage message={"Your shopping cart is empty"} />
        ) : (
          <>
            <ShopingCartContainer>
              {shoppingCartFiltered.map((tour) => (
                <ShoppingCartItem tour={tour} />
              ))}
            </ShopingCartContainer>

            <TotalsContainer>
              <HeadingH2> Totals: </HeadingH2>
              <TextLargePrimary>€{totals}</TextLargePrimary>
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
