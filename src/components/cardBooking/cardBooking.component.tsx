import { Booking } from "../../models/bookings";
import { HeadingH1, HeadingH2, TextMedium } from "../../styled/typography";
import {
  Container,
  Content,
  Description,
  Heading,
  Image,
  LinkContent,
  Price,
} from "./cardBooking.styles";

const CardBooking = ({ booking }: { booking: Booking }) => {
  return (
    <Container>
      <LinkContent to={`/tour/${booking.tour._id}`}>
        <Content>
          <Image
            src={require(`../../img/${booking.tour.imageCover}`)}
            alt="Tour image"
            loading="lazy"
          />
          <Description>
            <Heading>
              <HeadingH2>{booking.tour.name}</HeadingH2>
            </Heading>
            <TextMedium>{booking.tour.days} days</TextMedium>
            <TextMedium>
              Start & end: <b>{booking.tour.startAndEndPoint}</b>
            </TextMedium>
            <TextMedium>
              Date: <b>mm/dd/rrrr</b>
            </TextMedium>
            <TextMedium>
              <b>{booking.travelers} / travelers</b>
            </TextMedium>
            <TextMedium>
              <b>€{booking.tour.price} / per person</b>
            </TextMedium>
            <Price>
              <HeadingH2>Totals:</HeadingH2>
              <HeadingH1>€{booking.travelers * booking.tour.price}</HeadingH1>
            </Price>
          </Description>
        </Content>
      </LinkContent>
    </Container>
  );
};

export default CardBooking;
