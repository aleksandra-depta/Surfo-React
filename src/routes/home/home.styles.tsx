import styled from "styled-components";
import { HeadingH2 } from "../../styled/typography";

export const BackgroundImage = styled.img`
  width: 100%;
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderSection = styled.div`
  position: relative;
  height: 100vh;
`;

export const SliderSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: max-content;
    margin-bottom: 14rem;
  }
`;

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: max-content;
    margin-bottom: 14rem;
  }
`;

export const SectionNewsletter = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    height: max-content;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Cards = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin-bottom: 10rem;
`;

export const IconArrow = styled.div`
  cursor: pointer;
  scale: 1.6;
  transition: 0.1s all;
  position: absolute;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    scale: 1.8;
  }
`;

export const IconArrowHeader = styled(IconArrow)`
  color: ${(props) => props.theme.colors.white};
  bottom: 16vh;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Heading = styled(HeadingH2)`
  color: ${(props) => props.theme.colors.darkText};
  text-align: center;
`;
