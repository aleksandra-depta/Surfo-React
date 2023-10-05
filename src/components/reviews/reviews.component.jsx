import React, { useState, useEffect } from "react";

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

const Reviews = ({ tour }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/v1/tours/${tour._id}/reviews`)
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews.data.reviews));
  }, []);

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
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide>
                <FigureReview>
                  <picture>
                    <ImageReview
                      src={require(`../../img/sl/${review.image}`)}
                      alt="tour"
                    />
                  </picture>
                  <TextContent>
                    <BlockquoteReview>{review.review}</BlockquoteReview>
                    <TextSmall>
                      &mdash; {review.user.name.split(" ")[0]}{" "}
                    </TextSmall>
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
