import styled from "styled-components";

export const CardsContainer = styled.div`
  margin: 8rem 0rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
`;

export const Slider = styled.div`
  margin: 10rem;
  position: relative;

  @media only screen and (max-width: 992px) {
    margin: 10rem 0 20rem 0;
    width: 100%;
  }
`;
