import { Tours } from "../../models/tours";
import CardSmall from "../cardSmall/cardSmall.component";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SliderCardsSmallSection = ({
  tours,
  slideNum,
  prev,
  next,
}: {
  tours: Tours;
  slideNum: number;
  prev: string | undefined;
  next: string | undefined;
}) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={slideNum}
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
      >
        {tours.data
          .filter((item) => item)
          .map((tour) => (
            <SwiperSlide key={tour._id}>
              <CardSmall key={tour._id} tour={tour} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={prev}>
        <ion-icon size="large" name="chevron-back-outline"></ion-icon>
      </div>
      <div className={next}>
        <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
      </div>
    </>
  );
};

export default SliderCardsSmallSection;
