import { useState } from "react";
import type { Tour } from "../../models/tour";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { controlBookmark } from "../../features/bookmarksSlice";

import { HeadingH2, TextMedium, TextSmall } from "../../styled/typography";
import { ButtonBlack } from "../../styled/buttons";
import {
  BookmarkIcon,
  Details,
  ImageCard,
  SliderCardLarge,
} from "./cardLarge.styles";

import IonIcon from "@reacticons/ionicons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardLarge = ({ tour }: { tour: Tour }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { bookmarks } = useAppSelector((store) => store.bookmark);
  const dispatch = useAppDispatch();

  const [showDetails, setShowDetails] = useState(
    window.innerWidth >= 1100 ? false : true
  );

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
      {window.innerWidth <= 1100 ? (
        <>
          <ImageCard
            src={require(`../../img/${tour.cardLargeImgSlider[0]}`)}
            alt="tour"
            loading="lazy"
          />
          <Details>
            <TextMedium>{tour.island}, Canaries </TextMedium>
            <HeadingH2>{tour.name}</HeadingH2>
            <TextSmall>{tour.cardLargeDescription}</TextSmall>
            <ButtonBlack
              to={`/tour/${tour._id}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0 });
              }}
            >
              Book Now
            </ButtonBlack>
          </Details>
        </>
      ) : (
        <Swiper
          className="swiper-wrapper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
        >
          <SwiperSlide
            onMouseOver={() => setShowDetails(true)}
            onMouseOut={() => {
              setShowDetails(window.innerWidth >= 992 ? false : true);
            }}
          >
            <ImageCard
              src={require(`../../img/${tour.cardLargeImgSlider[0]}`)}
              alt="tour"
              loading="lazy"
            />
            {showDetails && (
              <Details>
                <TextMedium>{tour.island}, Canaries </TextMedium>
                <HeadingH2>{tour.name}</HeadingH2>
                <TextSmall>{tour.cardLargeDescription}</TextSmall>
                <ButtonBlack
                  to={`/tour/${tour._id}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                >
                  Book Now
                </ButtonBlack>
              </Details>
            )}
          </SwiperSlide>
          {[1, 2].map((el) => (
            <SwiperSlide
              key={el}
              onMouseOver={() => setShowDetails(true)}
              onMouseOut={() => setShowDetails(false)}
            >
              <ImageCard
                src={require(`../../img/${tour.cardLargeImgSlider[el]}`)}
                alt="tour image"
                loading="lazy"
              />
              {showDetails && (
                <Details>
                  <HeadingH2>{tour.name}</HeadingH2>
                  <TextMedium>{tour.island}, Canaries </TextMedium>
                  <ButtonBlack
                    to={`/tour/${tour._id}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                  >
                    Book Now
                  </ButtonBlack>
                </Details>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </SliderCardLarge>
  );
};

export default CardLarge;
