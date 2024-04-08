import { useState } from "react";
import type { Tour } from "../../models/tour";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { controlBookmark } from "../../features/bookmarksSlice";

import IonIcon from "@reacticons/ionicons";
import { IconStar } from "../../styled/icons";
import { ButtonBlack } from "../../styled/buttons";
import { HeadingH3, LinkWhite, TextMedium } from "../../styled/typography";
import {
  BookmarkIcon,
  Content,
  Description,
  Details,
  IconStarsContainer,
  ImageCard,
  Row,
} from "./cardMedium.styled";

const CardMedium = ({ tour }: { tour: Tour; slider?: boolean }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { bookmarks } = useAppSelector((store) => store.bookmark);
  const dispatch = useAppDispatch();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Content
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
    >
      <ImageCard
        src={require(`../../img/${tour.imageCover}`)}
        alt="tour"
        loading="lazy"
      />
      {currentUser && (
        <BookmarkIcon onClick={() => dispatch(controlBookmark(tour._id))}>
          {bookmarks.find((el) => el._id === tour._id) ? (
            <IonIcon size="large" name="bookmark" />
          ) : (
            <IonIcon size="large" name="bookmark-outline" />
          )}
        </BookmarkIcon>
      )}
      {showDetails && (
        <Details>
          <Description>
            <HeadingH3>{tour.name}</HeadingH3>
            <TextMedium>
              {tour.island}, Canaries <br />
              {tour.days}-day trip
            </TextMedium>
            <Row>
              <IconStarsContainer>
                {[...Array(5)].map((el) => (
                  <IconStar key={el}>
                    <IonIcon size="small" name="star" />
                  </IconStar>
                ))}
              </IconStarsContainer>
              <LinkWhite to={`/tour/${tour._id}`}>
                {tour.ratingQuantity} opinions
              </LinkWhite>
            </Row>
          </Description>
          <ButtonBlack
            to={`/tour/${tour._id}`}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            See more
          </ButtonBlack>
        </Details>
      )}
    </Content>
  );
};

export default CardMedium;
