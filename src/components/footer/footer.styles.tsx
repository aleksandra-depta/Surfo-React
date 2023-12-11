import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 10rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10rem 0;

  @media only screen and (max-width: 992px) {
    margin: 1rem 0;
    justify-content: space-evenly;
  }
`;

export const ImageLogo = styled.img`
  width: 10rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  gap: 2rem;
`;
