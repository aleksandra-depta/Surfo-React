import styled from "styled-components";

export const Slider = styled.div`
  position: relative;

  @media only screen and (max-width: 1100px) {
    padding-right: 20rem;
    width: 76%;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const SliderCardsSmall = styled(Slider)`
  margin: 0 8rem;
  @media only screen and (max-width: 1100px) {
    margin: 0;
  }
`;
