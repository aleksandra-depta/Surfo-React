import { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import HalfSliderSection from "../../components/halfSliderSection/halfSliderSection.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { CardsContainer, Slider } from "./myFavorites.styles";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MyFavorites = ({ tours }: { tours: Tours }) => {
  const { bookmarks } = useAppSelector((store) => store.bookmark);

  return (
    <>
      <Col>
        <HeadingH2> My Favorites </HeadingH2>
        <TextSmall>Here you can view all your saved tours.</TextSmall>
      </Col>
      {bookmarks.length === 0 ? (
        <EmptyMessage message={"You do not have any saved tours yet!"} />
      ) : (
        <Slider>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: ".prevSliderFav",
              nextEl: ".nextSliderFav",
            }}
            breakpoints={{
              0: {
                spaceBetween: 10,
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
            <CardsContainer>
              {bookmarks.map((item) => (
                <SwiperSlide>
                  <CardSmall key={item._id} tour={item} />
                </SwiperSlide>
              ))}
            </CardsContainer>
          </Swiper>
          <div className="prevSliderFav">
            <ion-icon size="large" name="chevron-back-outline"></ion-icon>
          </div>
          <div className="nextSliderFav">
            <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
          </div>
        </Slider>
      )}
      <HalfSliderSection tours={tours} />
    </>
  );
};

export default MyFavorites;
