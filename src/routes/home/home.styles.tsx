import styled from "styled-components";

export const Slider = styled.div`
  position: relative;

  @media only screen and (max-width: 992px) {
    padding-right: 20rem;
  }
`;

export const SliderCardsSmall = styled(Slider)`
  margin: 0 8rem;
  @media only screen and (max-width: 992px) {
    margin: 0;
  }
`;
