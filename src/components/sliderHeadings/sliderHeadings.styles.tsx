import styled from "styled-components";

export const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20rem 0 10rem 0;

  @media only screen and (max-width: 1200px) {
    margin: 10rem 0 5rem 0;
  }
  @media only screen and (max-width: 576px) {
    gap: 1rem;
  }
`;

export const Slider = styled.div`
  margin-top: 10rem;
  max-height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
