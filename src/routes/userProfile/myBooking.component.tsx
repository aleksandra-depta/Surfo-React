import { useAppSelector } from "../../hooks";
import { useGetBookingsOnUserQuery } from "../../services/toursApi";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import CardBooking from "../../components/cardBooking/cardBooking.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { Container, Headings, Logo, LogoContainer } from "./userProfile.styles";

const MyBooking = () => {
  const { currentUser } = useAppSelector((store) => store.auth);

  const { data: bookings, isSuccess } = useGetBookingsOnUserQuery(
    currentUser === null ? null : currentUser._id
  );

  return (
    <Container>
      <LogoContainer>
        <Logo
          src={require(`../../img/logo.png`)}
          alt="Surfo logo"
          loading="lazy"
        />
      </LogoContainer>
      <Headings>
        <HeadingH2> My bookings </HeadingH2>
        <TextSmall>Here you can view all your booked tours.</TextSmall>
      </Headings>
      {isSuccess &&
        (bookings.data.filter((el) => el.user?._id === currentUser?._id)
          .length === 0 ? (
          <EmptyMessage message={"You do not have any booked tours yet!"} />
        ) : (
          bookings.data
            .filter((el) => el.user?._id === currentUser?._id)
            .map((booking) => <CardBooking booking={booking} />)
        ))}
    </Container>
  );
};

export default MyBooking;
