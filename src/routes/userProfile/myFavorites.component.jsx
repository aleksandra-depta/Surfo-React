import { useContext } from "react";
import { AddRemoveContext } from "../../contexts/controlAddRemoveCarts.context";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import EmptyMessage from "../../components/emptyMessage/emptyMessage.component";

import { HeadingH2, TextSmall } from "../../styled/typography";
import { CardContainer, Container, LogoContainer } from "./userProfile.styles";

const MyFavorites = () => {
  const { bookmarks } = useContext(AddRemoveContext);
  const bookmarksFiltered = bookmarks.filter((bookmark) => bookmark !== "");

  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <HeadingH2> My Favorites </HeadingH2>
      <TextSmall>Here you can view all your saved tours.</TextSmall>
      {bookmarksFiltered.length === 0 ? (
        <EmptyMessage message={"You do not have any saved tours yet!"} />
      ) : (
        <CardContainer>
          {bookmarksFiltered.map((item) => (
            <CardSmall key={item._id} tour={item} />
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default MyFavorites;
