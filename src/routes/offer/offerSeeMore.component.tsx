import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";

import { HeadingH2 } from "../../styled/typography";
import { SeeMoreHeading, SliderFullWidth } from "./offer.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Col } from "react-bootstrap";

const OfferSeeMore = ({ tours }: { tours: Tours }) => {
  const { selectedOptionType, selectedOptionLocation, showOffer } =
    useAppSelector((store) => store.searchTab);

  return (
    <>
      {!showOffer && selectedOptionLocation && selectedOptionType && (
        <Col>
          <SeeMoreHeading>
            <HeadingH2>See more</HeadingH2>
          </SeeMoreHeading>
          <SliderFullWidth>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              modules={[Navigation]}
              loop={true}
              navigation={{
                prevEl: ".prevSliderSeeMore",
                nextEl: ".nextSliderSeeMore",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 10,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 10,
                  slidesPerView: 3,
                },
                1200: {
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
              }}
            >
              {tours.data
                .filter(
                  (item) =>
                    item.type !== selectedOptionType &&
                    item.island !== selectedOptionLocation
                )
                .map((tour) => (
                  <SwiperSlide key={tour._id}>
                    <CardSmall tour={tour} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="prevSliderSeeMore">
              <ion-icon size="large" name="chevron-back-outline"></ion-icon>
            </div>
            <div className="nextSliderSeeMore">
              <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
            </div>
          </SliderFullWidth>
        </Col>
      )}
      {!showOffer && selectedOptionLocation && selectedOptionType === "" && (
        <Col>
          <SeeMoreHeading>
            <HeadingH2>See more</HeadingH2>
          </SeeMoreHeading>
          <SliderFullWidth>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              modules={[Navigation]}
              loop={true}
              navigation={{
                prevEl: ".prevSliderSeeMore",
                nextEl: ".nextSliderSeeMore",
              }}
              breakpoints={
                {
                  // 0: {
                  //   spaceBetween: 10,
                  //   slidesPerView: 1,
                  // },
                  // 768: {
                  //   spaceBetween: 20,
                  //   slidesPerView: 2,
                  // },
                  // 992: {
                  //   spaceBetween: 30,
                  //   slidesPerView: 3,
                  // },
                }
              }
            >
              {tours.data
                .filter((item) => item.island !== selectedOptionLocation)
                .map((tour) => (
                  <SwiperSlide key={tour._id}>
                    <CardSmall tour={tour} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="prevSliderSeeMore">
              <ion-icon size="large" name="chevron-back-outline"></ion-icon>
            </div>
            <div className="nextSliderSeeMore">
              <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
            </div>
          </SliderFullWidth>
        </Col>
      )}
      {!showOffer && selectedOptionType && selectedOptionLocation === "" && (
        <Col>
          <SeeMoreHeading>
            <HeadingH2>See more</HeadingH2>
          </SeeMoreHeading>
          <SliderFullWidth>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              modules={[Navigation]}
              loop={true}
              navigation={{
                prevEl: ".prevSliderSeeMore",
                nextEl: ".nextSliderSeeMore",
              }}
              breakpoints={
                {
                  // 0: {
                  //   spaceBetween: 10,
                  //   slidesPerView: 1,
                  // },
                  // 768: {
                  //   spaceBetween: 20,
                  //   slidesPerView: 2,
                  // },
                  // 992: {
                  //   spaceBetween: 30,
                  //   slidesPerView: 3,
                  // },
                }
              }
            >
              {tours.data
                .filter((item) => item.type !== selectedOptionType)
                .map((tour) => (
                  <SwiperSlide key={tour._id}>
                    <CardSmall tour={tour} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="prevSliderSeeMore">
              <ion-icon size="large" name="chevron-back-outline"></ion-icon>
            </div>
            <div className="nextSliderSeeMore">
              <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
            </div>
          </SliderFullWidth>
        </Col>
      )}
    </>
  );
};

export default OfferSeeMore;
