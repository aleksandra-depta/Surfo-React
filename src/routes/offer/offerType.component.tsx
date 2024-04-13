import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import { Slider } from "./offer.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const OfferType = ({ tours }: { tours: Tours }) => {
  const { selectedOptionType, showOffer, showTypeOffer } = useAppSelector(
    (store) => store.searchTab
  );

  return (
    <>
      {!showOffer && showTypeOffer && selectedOptionType && (
        <Slider>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: ".prevSliderType",
              nextEl: ".nextSliderType",
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
              1200: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
            }}
          >
            {tours.data
              .filter((item) => item.type === selectedOptionType)
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <CardSmall tour={tour} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="prevSliderType">
            <ion-icon size="large" name="chevron-back-outline"></ion-icon>
          </div>
          <div className="nextSliderType">
            <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
          </div>
        </Slider>
      )}
    </>
  );
};

export default OfferType;
