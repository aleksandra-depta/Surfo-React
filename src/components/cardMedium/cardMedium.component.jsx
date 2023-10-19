import { useDispatch, useSelector } from "react-redux";
import { navHomeInactive } from "../../features/navSlice";
import { controlBookmark } from "../../features/bookmarksSlice";

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
                <IconStar key={el}>
                  <ion-icon size="small" name="star"></ion-icon>
                </IconStar>
              ))}
            </IconStarsContainer>
            <LinkPrimary to={`/tour/${tour._id}`}>
              {tour.ratingQuantity} opinions
            </LinkPrimary>
          </Row>
        </Description>

        <ButtonPrimary
          to={`/tour/${tour._id}`}
          onClick={() => {
            dispatch(navHomeInactive());
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          See more
        </ButtonPrimary>
      </Details>
    </Content>
  );
};

export default CardMedium;
