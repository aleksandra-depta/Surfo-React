import { Container, Content, Image } from "./404.styled";
import { HeadingH3 } from "../../styled/typography";
import { ButtonBlack } from "../../styled/buttons";
import Logo from "../../img/logo_Icon.png";
import { Row } from "react-bootstrap";

const Page404 = () => {
  return (
    <Container>
      <Row>
        <Image src={Logo} alt="Logo" loading="lazy"></Image>
        <Content>
          <HeadingH3>Page not found</HeadingH3>
          <ButtonBlack to="/">Go to homepage</ButtonBlack>
        </Content>
      </Row>
    </Container>
  );
};

export default Page404;
