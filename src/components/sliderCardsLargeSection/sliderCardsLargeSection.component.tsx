import { Tours } from "../../models/tours";
import { Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardLarge from "../cardLarge/cardLarge.component";

const SliderCardsLargeSection = ({ tours }: { tours: Tours }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: ".prevSliderLarge",
          nextEl: ".nextSliderLarge",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1200: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        <Row>
          {tours.data
            .filter((item) => item.cardLarge === "ok")
            .map((tour) => (
              <SwiperSlide key={tour._id}>
                <CardLarge tour={tour} />
              </SwiperSlide>
            ))}
        </Row>
      </Swiper>
      <div className="prevSliderLarge">
        <ion-icon size="large" name="chevron-back-outline"></ion-icon>
      </div>
      <div className="nextSliderLarge">
        <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
      </div>
    </>
  );
};

export default SliderCardsLargeSection;
