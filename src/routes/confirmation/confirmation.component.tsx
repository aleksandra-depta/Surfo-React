import Footer from "../../components/footer/footer.component";
import {
  HeadingH2,
  HeadingH3,
  TextLargePrimary,
  TextSmall,
} from "../../styled/typography";
import {
  Button,
  Container,
  Content,
  LogoCart,
  LogoContainer,
} from "./confirmation.styles";

const Confirmation = () => {
  const bookingCode = Math.floor(Math.random() * 1000000) + 10000;
  return (
    <>
      <Container>
        <LogoContainer>
          <LogoCart src={require(`../../img/logo.png`)} alt="Surfo logo" />
        </LogoContainer>
        <HeadingH2> Your Booking Confirmation </HeadingH2>
        <TextSmall> Adventure with us! See you! </TextSmall>
        <Content>
          <HeadingH2> Booking code: </HeadingH2>
          <TextLargePrimary>{bookingCode}</TextLargePrimary>
          <HeadingH2> Thank you for booking with us </HeadingH2>
          <HeadingH3> Your Surfo Team </HeadingH3>
          <Button to="/myAccount/booking">All Your bookings</Button>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Confirmation;
