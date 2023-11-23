import { useSelector } from "react-redux";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import {
  CardContainer,
  Container,
  Headings,
  LogoContainer,
} from "./userProfile.styles";

const MyFavorites = () => {
  const { bookmarks } = useSelector((store) => store.bookmark);

  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <Headings>
        <HeadingH2> My Favorites </HeadingH2>
        <TextSmall>Here you can view all your saved tours.</TextSmall>
      </Headings>
      {bookmarks.length === 0 ? (
        <EmptyMessage message={"You do not have any saved tours yet!"} />
      ) : (
        <CardContainer>
          {bookmarks.map((item) => (
            <CardSmall key={item._id} tour={item} />
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default MyFavorites;
