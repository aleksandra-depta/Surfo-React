import SliderCardsMediumSection from "../sliderCardsMediumSection/sliderCardsMediumSection.component";
import {
  Cards,
  Container,
  Content,
  Description,
  Heading,
  Link,
} from "./natureSection.styles";

const NatureSection = () => {
  return (
    <Container>
      <Heading>nature</Heading>
      <Content>
        <Description>
          <Link>adventure</Link>
          <Link>explore</Link>
          <Link>desire</Link>
          <Link>friendships</Link>
          <Link>memories</Link>
        </Description>
        <Cards>
          <SliderCardsMediumSection />
        </Cards>
      </Content>
    </Container>
  );
};

export default NatureSection;
