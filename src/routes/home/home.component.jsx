import CardSmall from "../../components/cardSmall/cardSmall.component";
import CardMedium from "../../components/cardMedium/cardMedium.component";
import CardLarge from "../../components/cardLarge/cardLarge.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Newsletters from "../../components/newsletter/newsletter.component";

import { HeadingH2 } from "../../styled/typography";
import { BackgroundImage, Cards, Row, Section } from "./home.styles";

import BackgroundHeaderImg from "../../img/hero-2000.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HomePage = ({ tours }) => {
  return (
    <>
      <BackgroundImage src={BackgroundHeaderImg} />
      <Header />

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
        <Row>
          {tours
            .filter((item) => item.cardLarge === "ok")
            .map((tour) => (
              <SwiperSlide key={tour._id}>
                <CardLarge key={tour._id} tour={tour} />
              </SwiperSlide>
            ))}
        </Row>
      </Swiper>

      <Section>
        <HeadingH2>Places you can not missed</HeadingH2>
        <Cards>
          {tours
            .filter((item) => item.cardSmall === "ok")
            .map((tour) => (
              <CardSmall key={tour._id} tour={tour} />
            ))}
        </Cards>
      </Section>
      <Section>
        <HeadingH2>The most Popular</HeadingH2>
        <Cards>
          {tours
            .filter((item) => item.cardMedium === "ok")
            .map((tour) => (
              <CardMedium key={tour._id} tour={tour} />
            ))}
        </Cards>
      </Section>
      <Newsletters />
      <Footer />
    </>
  );
};

export default HomePage;
