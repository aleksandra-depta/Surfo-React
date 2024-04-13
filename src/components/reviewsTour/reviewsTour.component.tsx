import type { Tour } from "../../models/tour";
import CardReview from "../cardReview/cardReview.component";
import Comments from "../comments/comments.component";
import Loading from "../loading/loading.component";

import { useGetReviewsQuery } from "../../services/toursApi";
import { HeadingH2 } from "../../styled/typography";
import { ButtonRawWhite } from "../../styled/buttons";
import {
  Content,
  Headings,
  ReviewSectionTour,
  SliderTour,
} from "./reviewsTour.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ReviewsTour = ({ tour }: { tour: Tour }) => {
  const { data: reviews, isSuccess, isLoading } = useGetReviewsQuery(tour._id);

  return (
    <ReviewSectionTour>
      <Headings>
        <HeadingH2>A lot of happy adventures with us!</HeadingH2>
        <ButtonRawWhite
          to="/offer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          check offers
        </ButtonRawWhite>
      </Headings>
      <Content>
        {isSuccess && (
          <SliderTour>
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prevSliderReviewTour",
                nextEl: ".nextSliderReviewTour",
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
              }}
            >
              {reviews?.reviews.map((review) => (
                <SwiperSlide>
                  <CardReview review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="prevSliderReviewTour">
              <ion-icon size="large" name="chevron-back-outline"></ion-icon>
            </div>
            <div className="nextSliderReviewTour">
              <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
            </div>
          </SliderTour>
        )}
        {isLoading && <Loading />}
        <Comments tour={tour} />
      </Content>
    </ReviewSectionTour>
  );
};

export default ReviewsTour;
