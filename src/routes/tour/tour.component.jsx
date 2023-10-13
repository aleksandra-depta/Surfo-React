import { useContext } from "react";

import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../../contexts/user.context";

import Map from "../../components/map/map.component";
import Reviews from "../../components/reviews/reviews.component";
import Comments from "../../components/comments/comments.component";
import Footer from "../../components/footer/footer.component";
import CardTour from "../../components/cardTour/cardTour.component";

import { HeadingH3, TextMedium, TextSmall } from "../../styled/typography";
import { IconCheckmark, IconPin } from "../../styled/icons";
import { DescriptionRow, ItemRow, RowPin, RowTour } from "./tour.styles";

const TourPage = ({ tour }) => {
  // const { currentUser } = useContext(UserContext);
  // const {
  //   bookmarks,
  //   controlItemToBookmarks,
  //   shoppingCart,
  //   controlItemToShoppingCart,
  //   addItemToCart,
  // } = useContext(AddRemoveContext);

  // const shoppingCartFiltered = shoppingCart.filter((item) => item !== "");

  // const controlBookmark = () => controlItemToBookmarks(tour);
  // const controlShoppingCart = () => {
  //   controlItemToShoppingCart(tour);
  //   addItemToCart(tour);
  // };

  return (
    <>
      <CardTour tour={tour} />
      <RowTour>
        <HeadingH3>Description</HeadingH3>
        <TextSmall>{tour.description}</TextSmall>
        <DescriptionRow>
          {tour.descriptionCheckPoints.map((point) => {
            return (
              <ItemRow key={point}>
                <IconCheckmark>
                  <ion-icon size="large" name="checkmark-outline"></ion-icon>
                </IconCheckmark>
                <TextMedium>{point}</TextMedium>
              </ItemRow>
            );
          })}
        </DescriptionRow>
      </RowTour>
      <RowPin>
        <ItemRow>
          <TextMedium>Start / end: </TextMedium>
          <TextMedium>
            <b>{tour.startAndEndPoint}</b>
          </TextMedium>
        </ItemRow>
        <ItemRow>
          <TextMedium>Stops: </TextMedium>
          {tour.stopPoints.map((point) => {
            return (
              <ItemRow key={point}>
                <IconPin>
                  <ion-icon size="small" name="pin"></ion-icon>
                </IconPin>
                <TextMedium>{point} </TextMedium>
              </ItemRow>
            );
          })}
        </ItemRow>
      </RowPin>
      <Map tour={tour} />
      <Reviews tour={tour} />
      <Comments tour={tour} />
      <Footer />
    </>
  );
};

export default TourPage;
