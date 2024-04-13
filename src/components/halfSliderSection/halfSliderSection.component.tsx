import SliderCardsSmallSection from "../../components/sliderCardsSmallSection/sliderCardsSmallSection.component";
import { HeadingH2 } from "../../styled/typography";
import { OfferLink, Slider, SliderContainer } from "./halfSliderSection.styles";
import { Col } from "react-bootstrap";
import IonIcon from "@reacticons/ionicons";

const HalfSliderSection = () => {
  return (
    <>
      <SliderContainer>
        <Col>
          <HeadingH2>Check our offer</HeadingH2>
          <HeadingH2>& TRAVEL WITH SURFO</HeadingH2>
          <OfferLink
            to="/offer"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <IonIcon size="large" name="arrow-up" />
            search
          </OfferLink>
        </Col>
        <Slider>
          <SliderCardsSmallSection
            slideNum={window.innerWidth <= 1200 ? 1 : 2}
            prev={"prevCart"}
            next={"nextCart"}
          />
        </Slider>
      </SliderContainer>
    </>
  );
};

export default HalfSliderSection;
