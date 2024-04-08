import { Review } from "../../models/review";
import { HeadingH2, HeadingH3 } from "../../styled/typography";
import {
  Container,
  Content,
  Image,
  ImageUser,
  UserDetails,
} from "./cardReview.styled";

const CardReview = ({ review }: { review: Review }) => {
  return (
    <Container>
      <Image
        src={require(`../../img/sl/${review.image}`)}
        alt="jpg"
        loading="lazy"
      />
      <Content>
        <HeadingH2>{review.review}</HeadingH2>
        <UserDetails>
          <ImageUser
            src={require(`../../img/u/${review.user.photo}`)}
            alt="jpg"
            loading="lazy"
          />
          <HeadingH3>{review.user.name}</HeadingH3>
        </UserDetails>
      </Content>
    </Container>
  );
};

export default CardReview;
