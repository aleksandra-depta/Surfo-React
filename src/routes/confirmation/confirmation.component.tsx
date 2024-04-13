import LocationSection from "../../components/locationsSection/locationsSection.component";
import SliderCardsSmallSection from "../../components/sliderCardsSmallSection/sliderCardsSmallSection.component";
import Footer from "../../components/footer/footer.component";

import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  TextSmall,
} from "../../styled/typography";
import {
  Button,
  Container,
  Content,
  Details,
  Logo,
  Slider,
} from "./confirmation.styles";
import { Col, Row } from "react-bootstrap";

const Confirmation = () => {
  const bookingCode = Math.floor(Math.random() * 1000000) + 10000;
  return (
    <>
      <Container>
        <Content>
          <Logo
            src={require(`../../img/logo.png`)}
            alt="Surfo logo"
            loading="lazy"
          />
          <HeadingH2> Your Booking Confirmation </HeadingH2>
          <TextSmall> Adventure with us! See you! </TextSmall>
          <Details>
            <HeadingH2> Booking code: </HeadingH2>
            <HeadingH1>{bookingCode}</HeadingH1>
            <HeadingH2> Thank you for booking with us </HeadingH2>
            <HeadingH3> Your Surfo Team </HeadingH3>
            <Button to="/myAccount/booking">Check all Your bookings</Button>
          </Details>
        </Content>
      </Container>
      <Row>
        <Col>
          <HeadingH2>Check our offer</HeadingH2>
          <HeadingH2>& TRAVEL WITH SURFO</HeadingH2>
        </Col>
        <Slider>
          <SliderCardsSmallSection
            slideNum={3}
            prev={"prevConfirmation"}
            next={"nextConfirmation"}
          />
        </Slider>
      </Row>
      <LocationSection />
      <Footer />
    </>
  );
};

export default Confirmation;
