import { useRef } from "react";
import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";

import Header from "../../components/headerOffer/headerOffer.component";
import OfferNav from "./offerNav.component";
import OfferType from "./offerType.component";
import OfferLocation from "./offerLocation.component";
import OfferSeeMore from "./offerSeeMore.component";
import Reviews from "../../components/reviewsSection/reviews.components";
import SliderCardsSmallSection from "../../components/sliderCardsSmallSection/sliderCardsSmallSection.component";
import Footer from "../../components/footer/footer.component";

import { HeadingH2 } from "../../styled/typography";
import { ShowContent, Slider, SliderContainer } from "./offer.styles";
import { Col } from "react-bootstrap";

const OfferPage = ({ tours }: { tours: Tours }) => {
  const sectionSearchTab = useRef<HTMLDivElement>(null);

  const { selectedOptionType, selectedOptionLocation, showOffer } =
    useAppSelector((store) => store.searchTab);

  return (
    <>
      <Header />
      <>
        <ShowContent>
          <OfferNav refName={sectionSearchTab} />
          <OfferType tours={tours} />
          <OfferLocation tours={tours} />
        </ShowContent>
        <OfferSeeMore tours={tours} />
        {showOffer &&
          selectedOptionType === "" &&
          selectedOptionLocation === "" && (
            <SliderContainer>
              <Col>
                <HeadingH2>Check our offer</HeadingH2>
                <HeadingH2>& TRAVEL WITH SURFO</HeadingH2>
              </Col>
              <Slider>
                <SliderCardsSmallSection
                  tours={tours}
                  slideNum={
                    window.innerWidth <= 768
                      ? window.innerWidth <= 460
                        ? 1
                        : 2
                      : 3
                  }
                  prev={"prevOffer"}
                  next={"nextOffer"}
                />
              </Slider>
            </SliderContainer>
          )}
      </>
      <Reviews />
      <Footer />
    </>
  );
};

export default OfferPage;
