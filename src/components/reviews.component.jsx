import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Reviews = ({ tour }) => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/v1/tours/${tour._id}/reviews`)
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews.data.reviews))
  }, []);

  return(
    <div className="tour__reviews">
      <p className="text__description text__description--dark">Customer review</p>
      <h2 className="title__main title__main--dark">A lot of happy adventures with us! <br/></h2>
      <p className="title__second title__second--dark">Once you try it, you can't stop the new lifestyle!</p>
      <div className="tour__slider" >
        <Swiper 
          className="swiperReviews mySwiper"
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          { reviews.map(review => {
            return (
              <SwiperSlide key={review.user.name} className="tour__slides--content">
                <figure className="tour__testimonial">
                  <picture>
                    <source src={require(`../img/sl/${review.image}`)} type="image/jpg" />
                    <img
                      className="tour__testimonial--img"
                      src={require(`../img/sl/${review.image}`)}
                      alt='tour'
                    />
                  </picture>
                  <blockquote className="text__description text__description--dark tour__testimonial--description">
                    {review.review}
                  </blockquote>
                  <p className="text__description text__description--dark tour__testimonial--description" >&mdash; {review.user.name.split(' ')[0]} </p>
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>       
      </div>   
    </div>
  )
}

export default Reviews;  