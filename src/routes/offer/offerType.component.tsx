import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import { Content, SectionContainer } from "./offer.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OfferType = ({ tours }: { tours: Tours }) => {
  const { selectedOptionType, showOffer, showTypeOffer } = useAppSelector(
    (store) => store.searchTab
  );

  return (
    <>
      {!showOffer && showTypeOffer && selectedOptionType && (
        <SectionContainer>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
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
                slidesPerView: 4,
              },
            }}
          >
            {tours.data
              .filter((item) => item.type === selectedOptionType)
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <Content>
                    <CardSmall tour={tour} />
                  </Content>
                </SwiperSlide>
              ))}
          </Swiper>
        </SectionContainer>
      )}
    </>
  );
};

export default OfferType;
