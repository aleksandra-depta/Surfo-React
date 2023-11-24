import styled from "styled-components";

export const BackgroundImage = styled.img`
  width: 100%;
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 5rem;
`;

export const Section = styled.div`
  margin: 14rem 0;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;
