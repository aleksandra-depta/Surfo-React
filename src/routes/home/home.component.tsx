import type { Tours } from "../../models/tours";
import { useRef } from "react";

import IonIcon from "@reacticons/ionicons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import CardMedium from "../../components/cardMedium/cardMedium.component";
import CardLarge from "../../components/cardLarge/cardLarge.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import IconArrowC from "../../components/iconArrow/iconArrow.component";
import Newsletters from "../../components/newsletter/newsletter.component";

import {
  BackgroundImage,
  Cards,
  Content,
  HeaderSection,
  Heading,
  IconArrowHeader,
  Row,
  Section,
  SectionNewsletter,
  SliderSection,
} from "./home.styles";

import BackgroundHeaderImg from "../../img/hero-2000.png";

const HomePage = ({ tours }: { tours: Tours }) => {
  const sectionLargeCards = useRef<HTMLDivElement>(null);
  const sectionSmallCards = useRef<HTMLDivElement>(null);
  const sectionMediumCards = useRef<HTMLDivElement>(null);
  const sectionNewsletter = useRef<HTMLDivElement>(null);

  return (
    <>
      <BackgroundImage src={BackgroundHeaderImg} />
      <HeaderSection>
        <Header />
        <IconArrowHeader
          onClick={() => {
            sectionLargeCards.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <IonIcon size="large" name="chevron-down-outline" />
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
            {tours.data
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
