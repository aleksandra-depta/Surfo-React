import { useContext } from "react";

import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../../contexts/user.context";

import { IconStar } from "../../styled/icons";
import { ButtonPrimary } from "../../styled/buttons";
import { HeadingH3, LinkPrimary, TextMedium } from "../../styled/typography";
import {
  BookmarkIcon,
  Content,
  Description,
  Details,
  IconStarsContainer,
  ImageCard,
  Row,
} from "./cardMedium.styled";

const CardMedium = ({ tour }) => {
  
  const { currentUser } = useContext(UserContext);
  const { bookmarks, controlItemToBookmarks } = useContext(AddRemoveContext);
  const controlBookmark = () => controlItemToBookmarks(tour);

  return (
    <Content>
      <ImageCard src={require(`../../img/${tour.imageCover}`)} alt="tour" />
      {currentUser && (
        <button onClick={controlBookmark}>
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
        </button>
      )}
      <Details>
        <Description>
          <Row>
            <HeadingH3>{tour.name}</HeadingH3>
            <TextMedium>
              {tour.island}, Canaries <br />
              {tour.days}-day trip
            </TextMedium>
          </Row>
          <Row>
            <IconStarsContainer>
              {[...Array(5)].map((el) => (
                <IconStar>
                  <ion-icon size="small" name="star"></ion-icon>
                </IconStar>
              ))}
            </IconStarsContainer>
            <LinkPrimary to={`/tour/${tour._id}`}>
              {tour.ratingQuantity} opinions
            </LinkPrimary>
          </Row>
        </Description>
        <ButtonPrimary to={`/tour/${tour._id}`}>See more</ButtonPrimary>
      </Details>
    </Content>
  );
};

export default CardMedium;
