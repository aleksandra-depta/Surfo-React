import { useAppDispatch } from "../../hooks";
import { Tour } from "../../models/tour";
import { removeFromCart } from "../../features/cartSlice";
import Counter from "../counter/counter.component";
import IonIcon from "@reacticons/ionicons";

import { HeadingH2, TextMedium } from "../../styled/typography";
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

const ShoppingCartItem = ({ tour }: { tour: Tour }) => {
  const dispatch = useAppDispatch();

  return (
    <Content>
      <IconTrash onClick={() => dispatch(removeFromCart(tour._id))}>
        <IconGrey>
          <IonIcon size="large" name="close-outline" />
        </IconGrey>
      </IconTrash>
      <LinkContent to={`/tour/${tour._id}`}>
        <ImageItem
          src={require(`../../img/${tour.imageCover}`)}
          alt="Tour image"
          loading="lazy"
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
              <HeadingH2>€{tour.price}</HeadingH2>
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
