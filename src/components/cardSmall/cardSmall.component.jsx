import { useDispatch, useSelector } from "react-redux";
import { controlBookmark } from "../../features/bookmarksSlice";

import { ButtonPrimary } from "../../styled/buttons";
import { HeadingH3, TextMedium } from "../../styled/typography";
import {
  BookmarkIcon,
  Button,
  Content,
  ContentDetails,
  Details,
  ImageCard,
} from "./cardSmall.styles";

const CardSmall = ({ tour }) => {
  const { currentUser } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();

  return (
    <Content>
      <ImageCard src={require(`../../img/${tour.imageCover}`)} alt="tour" />
      {currentUser && (
        <BookmarkIcon onClick={() => dispatch(controlBookmark(tour._id))}>
          {bookmarks.find((el) => el._id === tour._id) ? (
            <ion-icon size="large" name="bookmark"></ion-icon>
          ) : (
            <ion-icon size="large" name="bookmark-outline"></ion-icon>
          )}
        </BookmarkIcon>
      )}
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
    </Content>
  );
};

export default CardSmall;
