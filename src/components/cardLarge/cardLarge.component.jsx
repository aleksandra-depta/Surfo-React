import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { UserContext } from "../../contexts/user.context";
import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";

import {
  HeadingH3,
  HeadingH4,
  TextMedium,
  TextSmall,
} from "../../styled/typography";
import { ButtonWhite } from "../../styled/buttons";
import {
  BookmarkIcon,
  Details,
  ImageCard,
  ImageDifficulty,
  Row,
  RowItem,
  SliderCardLarge,
} from "./cardLarge.styles";

const CardLarge = ({ tour }) => {
  const { currentUser } = useContext(UserContext);
  const { bookmarks, controlItemToBookmarks } = useContext(AddRemoveContext);

  const controlBookmark = () => controlItemToBookmarks(tour);

  return (
    <SliderCardLarge>
      {currentUser && (
        <div onClick={controlBookmark}>
          {bookmarks.length === 0 ? (
            <BookmarkIcon>
              <ion-icon size="large" name="bookmark-outline"></ion-icon>
            </BookmarkIcon>
          ) : (
            bookmarks.map((el) =>
              el._id === tour._id ? (
                <BookmarkIcon key={tour._id}>
                  <ion-icon size="large" name="bookmark"></ion-icon>
                </BookmarkIcon>
              ) : (
                <BookmarkIcon key={tour._id}>
                  <ion-icon size="large" name="bookmark-outline"></ion-icon>
                </BookmarkIcon>
              )
            )
          )}
        </div>
      )}
      <Swiper
        className="swiper-wrapper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>
          <ImageCard
            src={require(`../../img/${tour.cardLargeImgUr800[0]}`)}
            alt="tour"
          />
          <Details>
            <HeadingH3>{tour.name}</HeadingH3>
            <TextMedium>{tour.island}, Canaries </TextMedium>
            <Row>
              <RowItem>
                <ion-icon size="small" name="star-outline"></ion-icon>
                <TextMedium>{tour.ratingAverage}</TextMedium>
              </RowItem>
              <RowItem>
                <TextMedium>Difficulty</TextMedium>
                <ImageDifficulty
                  src={require(`../../img/cardLarge_${tour.cardDifficultyImageUrl}`)}
                  alt="Difficulty"
                />
              </RowItem>
            </Row>
            <TextSmall>{tour.cardLargeDescription}</TextSmall>
            <ButtonWhite to={`/tour/${tour.id}`}>Book Now</ButtonWhite>
          </Details>
        </SwiperSlide>

        {[1, 2].map((el) => (
          <SwiperSlide key={el}>
            <ImageCard
              src={require(`../../img/${tour.cardLargeImgUr800[el]}`)}
              alt="tour image"
            />
            <Details>
              <HeadingH3>{tour.name}</HeadingH3>
              <HeadingH4> {tour.island}, Canaries </HeadingH4>
              <ButtonWhite to={`/tour/${tour._id}`}>Book Now</ButtonWhite>
            </Details>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderCardLarge>
  );
};

export default CardLarge;
