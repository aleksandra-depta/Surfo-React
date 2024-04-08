import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import { Slider } from "./offer.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const OfferLocation = ({ tours }: { tours: Tours }) => {
  const { selectedOptionLocation, showOffer, showLocationOffer } =
    useAppSelector((store) => store.searchTab);

  return (
    <>
      {!showOffer && showLocationOffer && selectedOptionLocation && (
        <Slider>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: ".prevSliderLocation",
              nextEl: ".nextSliderLocation",
            }}
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              420: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
            }}
          >
            {tours.data
              .filter((item) => item.island === selectedOptionLocation)
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <CardSmall tour={tour} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="prevSliderLocation">
            <ion-icon size="large" name="chevron-back-outline"></ion-icon>
          </div>
          <div className="nextSliderLocation">
            <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
          </div>
        </Slider>
      )}
    </>
  );
};

export default OfferLocation;
