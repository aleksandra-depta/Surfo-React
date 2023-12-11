import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";

import { HeadingH2 } from "../../styled/typography";
import { Content, SectionContainer, SeeMoreContainer } from "./offer.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OfferSeeMore = ({ tours }: { tours: Tours }) => {
  const { selectedOptionType, selectedOptionLocation, showOffer } =
    useAppSelector((store) => store.searchTab);

  return (
    <>
      {!showOffer && selectedOptionLocation && selectedOptionType && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <SeeMoreContainer>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 3,
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
                    <Content>
                      <CardSmall tour={tour} />
                    </Content>
                  </SwiperSlide>
                ))}
            </Swiper>
          </SeeMoreContainer>
        </SectionContainer>
      )}
      {!showOffer && selectedOptionLocation && selectedOptionType === "" && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <SeeMoreContainer>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
            >
              {tours.data
                .filter((item) => item.island !== selectedOptionLocation)
                .map((tour) => (
                  <SwiperSlide key={tour._id}>
                    <Content>
                      <CardSmall tour={tour} />
                    </Content>
                  </SwiperSlide>
                ))}
            </Swiper>
          </SeeMoreContainer>
        </SectionContainer>
      )}
      {!showOffer && selectedOptionType && selectedOptionLocation === "" && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <SeeMoreContainer>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
            >
              {tours.data
                .filter((item) => item.type !== selectedOptionType)
                .map((tour) => (
                  <SwiperSlide key={tour._id}>
                    <Content>
                      <CardSmall tour={tour} />
                    </Content>
                  </SwiperSlide>
                ))}
            </Swiper>
          </SeeMoreContainer>
        </SectionContainer>
      )}
    </>
  );
};

export default OfferSeeMore;
