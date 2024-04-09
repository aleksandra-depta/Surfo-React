import type { Tours } from "../../models/tours";

import HeaderHome from "../../components/headerHome/headerHome.components";
import IconsSection from "../../components/iconsSection/iconsSection.components";
import NatureSection from "../../components/natureSection/natureSection.component";
import SliderHeadings from "../../components/sliderHeadings/sliderHeadings.component";
import SliderCardsLargeSection from "../../components/sliderCardsLargeSection/sliderCardsLargeSection.component";
import SliderCardsSmallSection from "../../components/sliderCardsSmallSection/sliderCardsSmallSection.component";
import Newsletters from "../../components/newsletter/newsletter.component";
import Footer from "../../components/footer/footer.component";

import { Slider, SliderCardsSmall } from "./home.styles";
import { Col } from "react-bootstrap";

const HomePage = ({ tours }: { tours: Tours }) => {
  return (
    <>
      <HeaderHome />
      <IconsSection />
      <Col>
        <SliderHeadings
          headingTop="BECOME A TRAVELER"
          headingBottom="TRAVEL WITH SURFO AROUND CANARIES"
        />
        <Slider>
          <SliderCardsLargeSection tours={tours} />
        </Slider>
      </Col>
      <NatureSection tours={tours} />
      <Col>
        <SliderHeadings
          headingTop="Places you can not missed"
          headingBottom="Book your new adventure"
        />
        <SliderCardsSmall>
          <SliderCardsSmallSection
            tours={tours}
            slideNum={
              window.innerWidth <= 1200
                ? window.innerWidth <= 992
                  ? window.innerWidth <= 567
                    ? 1
                    : 2
                  : 3
                : 4
            }
            prev={"prevHomeCardsSmall"}
            next={"nextHomeCardsSmall"}
          />
        </SliderCardsSmall>
      </Col>

      <Newsletters />
      <Footer />
    </>
  );
};

export default HomePage;
