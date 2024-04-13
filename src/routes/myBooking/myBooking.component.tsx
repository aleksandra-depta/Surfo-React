import { useAppSelector } from "../../hooks";
import { useGetBookingsOnUserQuery } from "../../services/toursApi";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import CardBooking from "../../components/cardBooking/cardBooking.component";
import HalfSliderSection from "../../components/halfSliderSection/halfSliderSection.component";
import Loading from "../../components/loading/loading.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { CardsContainer } from "./myBooking.styles";
import { Col } from "react-bootstrap";

const MyBooking = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const {
    data: bookings,
    isSuccess,
    isLoading,
  } = useGetBookingsOnUserQuery(currentUser === null ? null : currentUser._id);

  return (
    <>
      <Col>
        <HeadingH2> My bookings </HeadingH2>
        <TextSmall>Here you can view all your booked tours.</TextSmall>
      </Col>
      {isLoading && <Loading />}
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
      <HalfSliderSection />
    </>
  );
};

export default MyBooking;
