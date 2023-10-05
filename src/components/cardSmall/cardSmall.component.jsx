import { useContext } from "react";

import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../../contexts/user.context";

import { ButtonPrimary } from "../../styled/buttons";
import { HeadingH3, TextMedium } from "../../styled/typography";
import { BookmarkIcon, Content, Details, ImageCard } from "./cardSmall.styles";

const CardSmall = ({ tour }) => {
  const { currentUser } = useContext(UserContext);
  const { bookmarks, controlItemToBookmarks } = useContext(AddRemoveContext);
  const controlBookmark = () => controlItemToBookmarks(tour);

  return (
    <Content>
      <ImageCard src={require(`../../img/${tour.imageCover}`)} alt="tour" />
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
      <Details>
        <HeadingH3>{tour.name}</HeadingH3>
        <TextMedium>
          {tour.island}, Canaries <br />
          {tour.days}-day trip
        </TextMedium>
        <ButtonPrimary
          to={`/tour/${tour._id}`}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          See more
        </ButtonPrimary>
      </Details>
    </Content>
  );
};

export default CardSmall;
