import styled from "styled-components";

export const Slider = styled.div`
  position: relative;

  @media only screen and (max-width: 1200px) {
    padding-right: 20rem;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const SliderCardsSmall = styled(Slider)`
  margin: 0 8rem;
  @media only screen and (max-width: 1200px) {
    margin: 0;
  }
`;
