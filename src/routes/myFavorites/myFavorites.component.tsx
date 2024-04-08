import { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";
import HalfSliderSection from "../../components/halfSliderSection/halfSliderSection.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { CardsContainer } from "./myFavorites.styles";
import { Col } from "react-bootstrap";

const MyFavorites = ({ tours }: { tours: Tours }) => {
  const { bookmarks } = useAppSelector((store) => store.bookmark);

  return (
    <>
      <Col>
        <HeadingH2> My Favorites </HeadingH2>
        <TextSmall>Here you can view all your saved tours.</TextSmall>
      </Col>
      {bookmarks.length === 0 ? (
        <EmptyMessage message={"You do not have any saved tours yet!"} />
      ) : (
        <CardsContainer>
          {bookmarks.map((item) => (
            <CardSmall key={item._id} tour={item} />
          ))}
        </CardsContainer>
      )}
      <HalfSliderSection tours={tours} />
    </>
  );
};

export default MyFavorites;
