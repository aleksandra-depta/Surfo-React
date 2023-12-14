import type { Tours } from "../../models/tours";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import CardMedium from "../../components/cardMedium/cardMedium.component";
import CardLarge from "../../components/cardLarge/cardLarge.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Newsletters from "../../components/newsletter/newsletter.component";

import {
  Cards,
  Content,
  HeaderSection,
  Heading,
  Row,
  Section,
  SectionNewsletter,
  SliderSection,
} from "./home.styles";

const HomePage = ({ tours }: { tours: Tours }) => {
  return (
    <>
      <HeaderSection>
        <Header />
      </HeaderSection>

      <SliderSection>
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
            {tours.data
              .filter((item) => item.cardLarge === "ok")
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <CardLarge tour={tour} />
                </SwiperSlide>
              ))}
          </Row>
        </Swiper>
      </SliderSection>

      <Section>
        <Heading>Places you can not missed</Heading>
        <Cards>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
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
                slidesPerView: 4,
              },
            }}
          >
            {tours.data
              .filter((item) => item.cardSmall === "ok")
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <Content>
                    <CardSmall slider={true} tour={tour} />
                  </Content>
                </SwiperSlide>
              ))}
          </Swiper>
        </Cards>
      </Section>

      <Section>
        <Heading>The most Popular</Heading>
        <Cards>
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
            {tours.data
              .filter((item) => item.cardMedium === "ok")
              .map((tour) => (
                <SwiperSlide key={tour._id}>
                  <Content>
                    <CardMedium slider={true} tour={tour} />
                  </Content>
                </SwiperSlide>
              ))}
          </Swiper>
        </Cards>
      </Section>

      <SectionNewsletter>
        <Newsletters />
      </SectionNewsletter>

      <Footer />
    </>
  );
};

export default HomePage;
