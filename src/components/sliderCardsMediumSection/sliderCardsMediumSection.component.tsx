import { useGetToursQuery } from "../../services/toursApi";
import Loading from "../loading/loading.component";
import CardMedium from "../cardMedium/cardMedium.component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SliderCardsMediumSection = () => {
  const { data: tours, isSuccess, isLoading } = useGetToursQuery();
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prevSliderMedium",
              nextEl: ".nextSliderMedium",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
            }}
          >
            {tours.data
              .filter((item) => item.cardMedium === "ok")
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <CardMedium slider={true} tour={tour} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="prevSliderMedium">
            <ion-icon size="large" name="chevron-back-outline"></ion-icon>
          </div>
          <div className="nextSliderMedium">
            <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
          </div>
        </>
      )}
    </>
  );
};

export default SliderCardsMediumSection;
