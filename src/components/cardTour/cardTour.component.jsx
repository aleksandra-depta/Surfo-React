import { useContext } from "react";
import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../../contexts/user.context";

import { IconBookmark, IconStar } from "../../styled/icons";
import { ButtonSmallPrimary, ButtonSmallWhite } from "../../styled/buttons";
import {
  HeadingH2,
  LinkGrey,
  TextLargePrimary,
  TextMedium,
  TextSmall,
} from "../../styled/typography";
import {
  BookmarkIcon,
  ButtonActive,
  ButtonInactive,
  CardContainer,
  Description,
  Details,
  ImageTour,
  Price,
  PriceContainer,
  Row,
  RowStars,
} from "./cardTour.styles";

const CardTour = ({ tour }) => {
  const { currentUser } = useContext(UserContext);
  const {
    bookmarks,
    controlItemToBookmarks,
    shoppingCart,
    controlItemToShoppingCart,
    addItemToCart,
  } = useContext(AddRemoveContext);

  const shoppingCartFiltered = shoppingCart.filter((item) => item !== "");

  const controlBookmark = () => controlItemToBookmarks(tour);
  const controlShoppingCart = () => {
    controlItemToShoppingCart(tour);
    addItemToCart(tour);
  };

  const detailsDescription = [
    {
      name: "Max group size:",
      content: tour.maxGroupSize,
    },
    {
      name: "Operated in:",
      content: tour.languages,
    },
    {
      name: "Min age:",
      content: tour.minGroupSize,
    },
    {
      name: "Food:",
      content: tour.food,
    },
    {
      name: "Sleeping:",
      content: tour.sleeping,
    },
    {
      name: "Stops:",
      content: tour.stops.map((stop) => {
        return <p>{stop}</p>;
      }),
    },
  ];

  return (
    <CardContainer>
      <ImageTour src={require(`../../img/${tour.imageCover}`)} alt="tour" />
      <Details>
        {currentUser && (
          <div onClick={controlBookmark}>
            {bookmarks.length === 0 ? (
              <BookmarkIcon>
                <ion-icon size="large" name="bookmark-outline"></ion-icon>
              </BookmarkIcon>
            ) : (
              bookmarks.map((el) =>
                el._id === tour._id ? (
                  <BookmarkIcon>
                    <ion-icon size="large" name="bookmark"></ion-icon>
                  </BookmarkIcon>
                ) : (
                  <BookmarkIcon>
                    <ion-icon size="large" name="bookmark-outline"></ion-icon>
                  </BookmarkIcon>
                )
              )
            )}
          </div>
        )}
        <Row>
          <ButtonSmallPrimary to="">Book with flexibility</ButtonSmallPrimary>
          <ButtonSmallPrimary to="">Get discount</ButtonSmallPrimary>
        </Row>
        <HeadingH2>{tour.name}</HeadingH2>
        <RowStars>
          <TextMedium>{tour.days} days</TextMedium>
          <Row>
            <TextMedium>{tour.ratingAverage}</TextMedium>
            <IconStar>
              <ion-icon size="small" name="star"></ion-icon>
            </IconStar>
            <LinkGrey to="">{tour.ratingQuantity}</LinkGrey>
          </Row>
        </RowStars>
        <TextMedium>
          Start & end: <b>{tour.startAndEndPoint}</b>
        </TextMedium>
        <Row>
          {tour.keywords.map((word) => {
            return <ButtonSmallWhite to="">{word}</ButtonSmallWhite>;
          })}
        </Row>
        <Description>
          {detailsDescription.map((el) => (
            <TextSmall>
              <b>{el.name}</b>
              <br />
              {el.content}
            </TextSmall>
          ))}
        </Description>
        <PriceContainer>
          <Price>
            <TextLargePrimary>€{tour.price}</TextLargePrimary>
            <TextSmall>/per person</TextSmall>
          </Price>
          {shoppingCartFiltered.find((el) => el._id === tour._id) ? (
            <ButtonInactive onClick={controlShoppingCart}>
              in cart
            </ButtonInactive>
          ) : (
            <ButtonActive to="/shoppingCart" onClick={controlShoppingCart}>
              book now
            </ButtonActive>
          )}
        </PriceContainer>
      </Details>
    </CardContainer>
  );
};

export default CardTour;
