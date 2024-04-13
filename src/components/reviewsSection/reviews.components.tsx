import { useGetAllReviewsQuery } from "../../services/toursApi";
import CardReview from "../cardReview/cardReview.component";
import { Headings, ReviewSection, Slider } from "./reviews.styles";

import Loading from "../loading/loading.component";
import { HeadingH2 } from "../../styled/typography";
import { ButtonRawWhite } from "../../styled/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Reviews = () => {
  const { data: reviews, isSuccess, isLoading } = useGetAllReviewsQuery();

  return (
    <>
      <ReviewSection>
        <Headings>
          <HeadingH2>Our memories</HeadingH2>
          <ButtonRawWhite
            to=""
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            check offers
          </ButtonRawWhite>
        </Headings>
        {isSuccess && (
          <Slider>
            <Swiper
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prevSliderReview",
                nextEl: ".nextSliderReview",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                576: {
                  spaceBetween: 10,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 10,
                  slidesPerView: 3,
                },
                992: {
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
                1200: {
                  spaceBetween: 30,
                  slidesPerView: 5,
                },
              }}
            >
              {reviews?.reviews.map((review) => (
                <SwiperSlide>
                  <CardReview review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="prevSliderReview">
              <ion-icon size="large" name="chevron-back-outline"></ion-icon>
            </div>
            <div className="nextSliderReview">
              <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
            </div>
          </Slider>
        )}
        {isLoading && <Loading />}
      </ReviewSection>
    </>
  );
};

export default Reviews;
