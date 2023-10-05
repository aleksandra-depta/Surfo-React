import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { CardContainer, Container, LogoContainer } from "./userProfile.styles";

const MyBooking = () => {
  const { booking } = useContext(UserContext);

  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <HeadingH2> My booking </HeadingH2>
      <TextSmall>Here you can view all your booked tours.</TextSmall>

      {booking.length === 0 ? (
        <EmptyMessage message={"You do not have any booked tours yet!"} />
      ) : (
        <CardContainer>
          {booking.map((tour) => (
            <CardSmall tour={tour.tour} />
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default MyBooking;
