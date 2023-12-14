import type { Tour } from "../../models/tour";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { controlBookmark } from "../../features/bookmarksSlice";

import IonIcon from "@reacticons/ionicons";

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
  IconStar,
  ImageCard,
  ImageDifficulty,
  Row,
  RowItem,
  SliderCardLarge,
} from "./cardLarge.styles";

const CardLarge = ({ tour }: { tour: Tour }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { bookmarks } = useAppSelector((store) => store.bookmark);
  const dispatch = useAppDispatch();

  return (
    <SliderCardLarge>
      {currentUser && (
        <BookmarkIcon onClick={() => dispatch(controlBookmark(tour._id))}>
          {bookmarks.find((el) => el._id === tour._id) ? (
            <IonIcon size="large" name="bookmark" />
          ) : (
            <IonIcon size="large" name="bookmark-outline" />
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
                <IconStar>
                  <IonIcon size="small" name="star-outline" />
                </IconStar>
                <TextMedium>{tour.ratingAverage.toFixed(1)}</TextMedium>
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
              to={`/tour/${tour._id}`}
              onClick={() => {
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
