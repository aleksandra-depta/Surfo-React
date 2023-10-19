import { useSelector } from "react-redux";
import { useGetBookingsOnUserQuery } from "../../services/toursApi";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import CardBooking from "../../components/cardBooking/cardBooking.component";

import { Col } from "react-bootstrap";
import { HeadingH2, TextSmall } from "../../styled/typography";
import { Container, LogoContainer } from "./userProfile.styles";

const MyBooking = () => {
  const { currentUser } = useSelector((store) => store.auth);

  const {
    data: bookingsOnTour,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBookingsOnUserQuery(currentUser._id);

  let bookings;
  if (isSuccess) {
    bookings = bookingsOnTour.data.bookings;
  }

  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <Col>
        <HeadingH2> My bookings </HeadingH2>
        <TextSmall>Here you can view all your booked tours.</TextSmall>
      </Col>
      {isSuccess && bookings.length === 0 ? (
        <EmptyMessage message={"You do not have any booked tours yet!"} />
      ) : (
        <div>
          {isSuccess &&
            bookings.map((booking) => <CardBooking booking={booking} />)}
        </div>
      )}
    </Container>
  );
};

export default MyBooking;
