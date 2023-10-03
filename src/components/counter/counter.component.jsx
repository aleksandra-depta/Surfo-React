import { useContext } from "react";

import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";

import { IconCounter } from "../../styled/icons";
import { Container, CounterInput } from "./counter.styles";

const Counter = (tour) => {
  const { addItemToCart, removeItemToCart, items } =
    useContext(AddRemoveContext);

  return (
    <Container>
      <IconCounter onClick={() => removeItemToCart(tour)}>
        <ion-icon size="large" name="remove-circle"></ion-icon>
      </IconCounter>
      <CounterInput>
        {items.map((el) => (el._id === tour._id ? el.quantity : ""))}
      </CounterInput>
      <IconCounter onClick={() => addItemToCart(tour)}>
        <ion-icon size="large" name="add-circle"></ion-icon>
      </IconCounter>
    </Container>
  );
};

export default Counter;
