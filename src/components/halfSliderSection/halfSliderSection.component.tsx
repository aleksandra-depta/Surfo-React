import { Tours } from "../../models/tours";
import SliderCardsSmallSection from "../../components/sliderCardsSmallSection/sliderCardsSmallSection.component";

import { HeadingH2 } from "../../styled/typography";
import { Slider, SliderContainer } from "./halfSliderSection.styles";
import { Col } from "react-bootstrap";

const HalfSliderSection = ({ tours }: { tours: Tours }) => {
  return (
    <>
      <SliderContainer>
        <Col>
          <>
            <HeadingH2>Check our offer</HeadingH2>
            <HeadingH2>& TRAVEL WITH SURFO</HeadingH2>
          </>
        </Col>
        <Slider>
          <SliderCardsSmallSection
            tours={tours}
            slideNum={2}
            prev={"prevCart"}
            next={"nextCart"}
          />
        </Slider>
      </SliderContainer>
    </>
  );
};

export default HalfSliderSection;
