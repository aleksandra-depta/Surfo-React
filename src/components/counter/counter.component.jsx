import { IconCounter } from "../../styled/icons";
import { useDispatch } from "react-redux";
import { calcTotals, decrease, increase } from "../../features/cartSlice";

import { Container, CounterInput } from "./counter.styles";

const Counter = ({ tour }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <IconCounter
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrease(`${tour._id}`));
          dispatch(calcTotals());
        }}
      >
        <ion-icon size="large" name="remove-circle"></ion-icon>
      </IconCounter>
      <CounterInput>{tour.amount}</CounterInput>
      <IconCounter
        onClick={(e) => {
          e.preventDefault();
          dispatch(increase(`${tour._id}`));
          dispatch(calcTotals());
        }}
      >
        <ion-icon size="large" name="add-circle"></ion-icon>
      </IconCounter>
    </Container>
  );
};

export default Counter;
