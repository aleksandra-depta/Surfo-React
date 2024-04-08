import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Slider = styled.div`
  width: 60%;
  position: relative;
  margin-right: 10rem;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding-right: 14rem;
  }

  @media only screen and (max-width: 992px) {
    margin-right: auto;
    padding-right: 0;
    margin-bottom: 10rem;
  }
`;
