import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10rem 0;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
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
  padding: 2rem 5rem;

  @media only screen and (max-width: 992px) {
    padding: 2rem 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 2rem;
`;
