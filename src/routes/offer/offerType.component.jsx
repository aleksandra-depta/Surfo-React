import { useSelector } from "react-redux";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import { Content, SectionContainer } from "./offer.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OfferType = ({ tours }) => {
  const { selectedOptionType, showOffer, showTypeOffer } = useSelector(
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
            {tours
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
