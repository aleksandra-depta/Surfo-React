import { Booking } from "../../models/bookings";
import {
  HeadingH2,
  TextLargePrimary,
  TextMedium,
} from "../../styled/typography";
import {
  ItemContent,
  DescriptionContent,
  ImageItem,
  Content,
  LinkContent,
  Row,
  HeadingContent,
  PriceContent,
} from "./cardBooking.styles";

const CardBooking = ({ booking }: { booking: Booking }) => {
  return (
    <Content>
      <LinkContent to={`/tour/${booking.tour._id}`}>
        <HeadingContent>
          <HeadingH2>{booking.tour.name}</HeadingH2>
        </HeadingContent>

        <ItemContent>
          <ImageItem
            src={require(`../../img/${booking.tour.imageCover}`)}
            alt="Tour image"
          />
          <DescriptionContent>
            <TextMedium>{booking.tour.days} days</TextMedium>
            <TextMedium>
              Start & end: <b>{booking.tour.startAndEndPoint}</b>
            </TextMedium>
            <TextMedium>
              Date: <b>mm/dd/rrrr</b>
            </TextMedium>
          </DescriptionContent>
          <PriceContent>
            <Row>
              <TextMedium>
                <b>{booking.travelers}</b>
              </TextMedium>
              <TextMedium>/ travelers</TextMedium>
            </Row>
            <Row>
              <TextMedium>
                <b>€{booking.tour.price}</b>
              </TextMedium>
              <TextMedium>/ per person</TextMedium>
            </Row>
            <Row>
              <TextLargePrimary>Totals:</TextLargePrimary>
              <TextLargePrimary>
                €{booking.travelers * booking.tour.price}
              </TextLargePrimary>
            </Row>
          </PriceContent>
        </ItemContent>
      </LinkContent>
    </Content>
  );
};

export default CardBooking;
