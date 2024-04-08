import Icon01 from "../../img/icons/icon01.png";
import Icon02 from "../../img/icons/icon02.png";
import Icon03 from "../../img/icons/icon03.png";
import Icon04 from "../../img/icons/icon04.png";
import Icon05 from "../../img/icons/icon05.png";
import Icon06 from "../../img/icons/icon06.png";
import { Container, Content, Icon } from "./iconsSection.styles";
import { HeadingH2, TextSmall } from "../../styled/typography";
import { Col } from "react-bootstrap";

const IconsSection = () => {
  return (
    <Container>
      <HeadingH2>Discover Canaries</HeadingH2>
      <Content>
        <Col>
          <Icon src={Icon01} loading="lazy" />
          <TextSmall>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.
          </TextSmall>
        </Col>
        <Col>
          <Icon src={Icon02} loading="lazy" />
          <TextSmall>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
            incidunt.
          </TextSmall>
        </Col>
        <Col>
          <Icon src={Icon03} loading="lazy" />
          <TextSmall>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TextSmall>
        </Col>
        <Col>
          <Icon src={Icon04} loading="lazy" />
          <TextSmall>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
            incidunt quam.
          </TextSmall>
        </Col>
        <Col>
          <Icon src={Icon05} loading="lazy" />
          <TextSmall>
            Lorem ipsum dolor sit amet. Incidunt quam eaque amet.
          </TextSmall>
        </Col>
        <Col>
          <Icon src={Icon06} loading="lazy" />
          <TextSmall>
            Lorem ipsum dolor sit amet. Incidunt quam eaque amet.
          </TextSmall>
        </Col>
      </Content>
    </Container>
  );
};

export default IconsSection;
