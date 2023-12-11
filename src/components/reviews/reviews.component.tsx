import type { Tour } from "../../models/tour";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { HeadingH2, TextSmall } from "../../styled/typography";
import {
  BlockquoteReview,
  ContainerReview,
  FigureReview,
  ImageReview,
  SwiperReview,
  TextContent,
} from "./reviews.styles";
import { useGetReviewsQuery } from "../../services/toursApi";

const Reviews = ({ tour }: { tour: Tour }) => {
  const {
    data: reviews,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetReviewsQuery(tour._id);

  return (
    <ContainerReview>
      <TextSmall>Customer review</TextSmall>
      <HeadingH2>
        A lot of happy adventures with us! <br />
      </HeadingH2>
      <TextSmall>Once you try it, you can't stop the new lifestyle!</TextSmall>
      <SwiperReview>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
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
              slidesPerView: 3,
            },
          }}
        >
          {reviews?.reviews.map((review) => {
            return (
              <SwiperSlide key={review._id}>
                <FigureReview>
                  <picture>
                    <ImageReview
                      src={require(`../../img/sl/${review.image}`)}
                      alt="tour"
                    />
                  </picture>
                  <TextContent>
                    <BlockquoteReview>{review.review}</BlockquoteReview>
                    <BlockquoteReview>
                      &mdash; {review.user.name.split(" ")[0]}{" "}
                    </BlockquoteReview>
                  </TextContent>
                </FigureReview>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperReview>
    </ContainerReview>
  );
};

export default Reviews;
