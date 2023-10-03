import { Link } from "react-router-dom";
import Counter from "../counter/counter.component";

import {
  HeadingH2,
  TextLargePrimary,
  TextMedium,
} from "../../styled/typography";
import {
  Item,
  ItemContent,
  DescriptionContent,
  ImageItem,
  Content,
} from "./shoppingCartItem.styles";

const ShoppingCartItem = (tour) => {
  tour = tour.tour;

  return (
    <Content>
      {/* <button
        onClick={() => controlItemToShoppingCart(tour)}
        className="btn icon__counter shoppingCart__counter"
      >
        <div>
          <ion-icon size="large" name="trash-outline"></ion-icon>
        </div>
      </button> */}

      <Link to={`/tour/${tour._id}`}>
        <Item>
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
          <TextLargePrimary>
            €{tour.price}
            <TextMedium>
              <br />
              /per person
            </TextMedium>
          </TextLargePrimary>
        </Item>
      </Link>

      <Counter />
    </Content>
  );
};

export default ShoppingCartItem;
