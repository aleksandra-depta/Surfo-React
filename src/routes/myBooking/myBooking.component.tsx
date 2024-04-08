import { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import { useGetBookingsOnUserQuery } from "../../services/toursApi";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import CardBooking from "../../components/cardBooking/cardBooking.component";
import HalfSliderSection from "../../components/halfSliderSection/halfSliderSection.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { CardsContainer } from "./myBooking.styles";
import { Col } from "react-bootstrap";

const MyBooking = ({ tours }: { tours: Tours }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { data: bookings, isSuccess } = useGetBookingsOnUserQuery(
    currentUser === null ? null : currentUser._id
  );

  return (
    <>
      <Col>
        <HeadingH2> My bookings </HeadingH2>
        <TextSmall>Here you can view all your booked tours.</TextSmall>
      </Col>
      {isSuccess &&
        (bookings.data.filter((el) => el.user?._id === currentUser?._id)
          .length === 0 ? (
          <EmptyMessage message={"You do not have any booked tours yet!"} />
        ) : (
          <CardsContainer>
            {bookings.data
              .filter((el) => el.user?._id === currentUser?._id)
              .map((booking) => (
                <CardBooking booking={booking} />
              ))}
          </CardsContainer>
        ))}
      <HalfSliderSection tours={tours} />
    </>
  );
};

export default MyBooking;
