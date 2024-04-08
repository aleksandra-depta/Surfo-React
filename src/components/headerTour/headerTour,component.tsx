import IonIcon from "@reacticons/ionicons";
import { addToCart, calcTotals } from "../../features/cartSlice";
import { controlBookmark } from "../../features/bookmarksSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Tour } from "../../models/tour";
import { TextSmall } from "../../styled/typography";
import {
  BookmarkIcon,
  ButtonActive,
  ButtonInactive,
  Header,
  Price,
  PriceContainer,
  PriceText,
  Title,
} from "./headerTour.styles";

const HeaderTour = ({ tour }: { tour: Tour }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.cart);
  const { currentUser } = useAppSelector((store) => store.auth);
  const { bookmarks } = useAppSelector((store) => store.bookmark);

  return (
    <Header bg={tour.nr}>
      {currentUser && (
        <BookmarkIcon onClick={() => dispatch(controlBookmark(tour._id))}>
          {bookmarks.find((el) => el._id === tour._id) ? (
            <IonIcon size="large" name="bookmark" />
          ) : (
            <IonIcon size="large" name="bookmark-outline" />
          )}
        </BookmarkIcon>
      )}
      <Title>{tour.name}</Title>
      <PriceContainer>
        <Price>
          <PriceText>€{tour.price}</PriceText>
          <TextSmall>/per person</TextSmall>
        </Price>
        {cart.find((el) => el._id === tour._id) ? (
          <ButtonInactive to="/shoppingCart">in cart</ButtonInactive>
        ) : (
          <ButtonActive
            to="/shoppingCart"
            onClick={() => {
              dispatch(addToCart(tour._id));
              dispatch(calcTotals());
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            book now
          </ButtonActive>
        )}
      </PriceContainer>
    </Header>
  );
};

export default HeaderTour;
