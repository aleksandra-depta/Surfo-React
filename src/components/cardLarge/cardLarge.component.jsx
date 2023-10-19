import { useDispatch, useSelector } from "react-redux";
import { navHomeInactive } from "../../features/navSlice";
import { controlBookmark } from "../../features/bookmarksSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const { currentUser } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();

  return (
    <SliderCardLarge>
      {currentUser && (
        <BookmarkIcon onClick={() => dispatch(controlBookmark(tour._id))}>
          {bookmarks.find((el) => el._id === tour._id) ? (
            <ion-icon size="large" name="bookmark"></ion-icon>
          ) : (
            <ion-icon size="large" name="bookmark-outline"></ion-icon>
          )}
        </BookmarkIcon>
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
            <ButtonWhite
              to={`/tour/${tour.id}`}
              onClick={() => {
                dispatch(navHomeInactive());
                window.scrollTo({ top: 0, left: 0 });
              }}
            >
              Book Now
            </ButtonWhite>
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
