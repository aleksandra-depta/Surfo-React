import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { Tour } from "../../models/tour";
import { controlBookmark } from "../../features/bookmarksSlice";

import IonIcon from "@reacticons/ionicons";
import { HeadingH3, TextMedium } from "../../styled/typography";
import {
  BookmarkIcon,
  Button,
  Content,
  ContentDetails,
  Details,
  ImageCard,
} from "./cardSmall.styles";

const CardSmall = ({ tour }: { tour: Tour; slider?: boolean }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { bookmarks } = useAppSelector((store) => store.bookmark);
  const dispatch = useAppDispatch();
  const [showDetails, setShowDetails] = useState(
    window.innerWidth >= 1200 ? false : true
  );

  return (
    <Content
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() =>
        setShowDetails(window.innerWidth >= 1200 ? false : true)
      }
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
          <HeadingH3>{tour.name}</HeadingH3>
          <ContentDetails>
            <TextMedium>
              {tour.island}, Canaries <br />
              {tour.days}-day trip
            </TextMedium>
            <Button
              to={`/tour/${tour._id}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0 });
              }}
            >
              See more
            </Button>
          </ContentDetails>
        </Details>
      )}
    </Content>
  );
};

export default CardSmall;
