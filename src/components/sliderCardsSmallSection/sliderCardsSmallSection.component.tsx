import { useGetToursQuery } from "../../services/toursApi";
import CardSmall from "../cardSmall/cardSmall.component";
import Loading from "../loading/loading.component";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SliderCardsSmallSection = ({
  slideNum,
  prev,
  next,
}: {
  slideNum: number;
  prev: string | undefined;
  next: string | undefined;
}) => {
  const { data: tours, isSuccess, isLoading } = useGetToursQuery();
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <>
          <Swiper
            spaceBetween={30}
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
      )}
    </>
  );
};

export default SliderCardsSmallSection;
