import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartSlice";
import Counter from "../counter/counter.component";

import {
  HeadingH2,
  TextLargePrimary,
  TextMedium,
} from "../../styled/typography";
import { IconGrey } from "../../styled/icons";
import {
  DescriptionContent,
  ImageItem,
  Content,
  IconTrash,
  LinkContent,
  PriceContent,
  Details,
  Price,
} from "./shoppingCartItem.styles";

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
        <ImageItem
          src={require(`../../img/${tour.imageCover}`)}
          alt="Tour image"
        />
        <Details>
          <DescriptionContent>
            <HeadingH2>{tour.name}</HeadingH2>
            <div>
              <TextMedium>{tour.days} days</TextMedium>
              <TextMedium>
                Start & end: <b>{tour.startAndEndPoint}</b>
              </TextMedium>
            </div>
          </DescriptionContent>
          <PriceContent>
            <Price>
              <TextLargePrimary>€{tour.price}</TextLargePrimary>
              <TextMedium>/per person</TextMedium>
            </Price>
            <Counter tour={tour} />
          </PriceContent>
        </Details>
      </LinkContent>
    </Content>
  );
};

export default ShoppingCartItem;
