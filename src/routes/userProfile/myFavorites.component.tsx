import { useAppSelector } from "../../hooks";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import {
  CardContainer,
  Container,
  Headings,
  Logo,
  LogoContainer,
} from "./userProfile.styles";

const MyFavorites = () => {
  const { bookmarks } = useAppSelector((store) => store.bookmark);

  return (
    <Container>
      <LogoContainer>
        <Logo src={require(`../../img/logo.png`)} alt="Surfo logo" />
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
