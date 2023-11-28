import { useRef } from "react";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import CardMedium from "../../components/cardMedium/cardMedium.component";
import CardLarge from "../../components/cardLarge/cardLarge.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Newsletters from "../../components/newsletter/newsletter.component";
import IconArrowC from "../../components/iconArrow/iconArrow.component";

import {
  BackgroundImage,
  Cards,
  Heading,
  Row,
  Section,
  SliderSection,
  IconArrowHeader,
  HeaderSection,
  SectionNewsletter,
  Content,
} from "./home.styles";

import BackgroundHeaderImg from "../../img/hero-2000.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HomePage = ({ tours }) => {
  const sectionLargeCards = useRef(null);
  const sectionSmallCards = useRef(null);
  const sectionMediumCards = useRef(null);
  const sectionNewsletter = useRef(null);

  return (
    <>
      <BackgroundImage src={BackgroundHeaderImg} />
      <HeaderSection>
        <Header />
        <IconArrowHeader
          onClick={() => {
            sectionLargeCards.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <ion-icon size="large" name="chevron-down-outline"></ion-icon>
        </IconArrowHeader>
      </HeaderSection>

      <SliderSection ref={sectionLargeCards}>
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
                  <CardLarge tour={tour} />
                </SwiperSlide>
              ))}
          </Row>
        </Swiper>
        <IconArrowC refName={sectionSmallCards} />
      </SliderSection>

      <Section ref={sectionSmallCards}>
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
            {tours
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
        <IconArrowC refName={sectionMediumCards} />
      </Section>

      <Section ref={sectionMediumCards}>
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
            {tours
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
        <IconArrowC refName={sectionNewsletter} />
      </Section>

      <SectionNewsletter ref={sectionNewsletter}>
        <Newsletters />
      </SectionNewsletter>

      <Footer />
    </>
  );
};

export default HomePage;
