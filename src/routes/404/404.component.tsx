import { Container, Image } from "./404.styled";
import { HeadingH3 } from "../../styled/typography";
import { ButtonSecondary } from "../../styled/buttons";
import Logo from "../../img/logo_Icon.png";

const Page404 = () => {
  return (
    <Container>
      <Image src={Logo} alt="Logo"></Image>
      <HeadingH3>Page not found</HeadingH3>
      <ButtonSecondary to="/">Go to homepage</ButtonSecondary>
    </Container>
  );
};

export default Page404;
