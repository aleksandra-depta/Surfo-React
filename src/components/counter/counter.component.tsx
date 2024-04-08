import { Tour } from "../../models/tour";
import { useAppDispatch } from "../../hooks";
import { calcTotals, decrease, increase } from "../../features/cartSlice";

import { IconCounter } from "../../styled/icons";
import { Container, CounterInput } from "./counter.styles";
import IonIcon from "@reacticons/ionicons";

const Counter = ({ tour }: { tour: Tour }) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <IconCounter
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrease(`${tour._id}`));
          dispatch(calcTotals());
        }}
      >
        <IonIcon size="large" name="remove-circle" />
      </IconCounter>
      <CounterInput>{tour.amount}</CounterInput>
      <IconCounter
        onClick={(e) => {
          e.preventDefault();
          dispatch(increase(`${tour._id}`));
          dispatch(calcTotals());
        }}
      >
        <IonIcon size="large" name="add-circle" />
      </IconCounter>
    </Container>
  );
};

export default Counter;
