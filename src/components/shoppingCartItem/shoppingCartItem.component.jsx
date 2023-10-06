import { useContext } from "react";

import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";

import Counter from "../counter/counter.component";

import {
  HeadingH2,
  TextLargePrimary,
  TextMedium,
} from "../../styled/typography";
import { IconGrey } from "../../styled/icons";
import {
  ItemContent,
  DescriptionContent,
  ImageItem,
  Content,
  IconTrash,
  LinkContent,
  PriceContent,
} from "./shoppingCartItem.styles";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartSlice";

const ShoppingCartItem = ({ tour }) => {
  const dispatch = useDispatch();

  return (
    <Content>
      <IconTrash onClick={() => dispatch(removeFromCart(tour._id))}>
        <IconGrey>
          <ion-icon size="large" name="trash-outline"></ion-icon>
        </IconGrey>
      </IconTrash>
      <LinkContent to={`/tour/${tour._id}`}>
        <ItemContent>
          <ImageItem
            src={require(`../../img/${tour.imageCover}`)}
            alt="Tour image"
          />
          <DescriptionContent>
            <HeadingH2>{tour.name}</HeadingH2>
            <TextMedium>{tour.days} days</TextMedium>
            <TextMedium>
              Start & end: <b>{tour.startAndEndPoint}</b>
            </TextMedium>
          </DescriptionContent>
        </ItemContent>
        <PriceContent>
          <TextLargePrimary>€{tour.price}</TextLargePrimary>
          <TextMedium>/per person</TextMedium>
        </PriceContent>
        <Counter tour={tour} />
      </LinkContent>
    </Content>
  );
};

export default ShoppingCartItem;
