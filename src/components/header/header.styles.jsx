import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 100vh;
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  padding-top: 25rem;
  display: grid;
  justify-content: center;
  grid-row-gap: 1.7rem;
  text-align: center;

  /* @media only screen and (max-width: $bp-565) {
    grid-template-columns: 1fr;
    padding-top: 20rem;
  } */
`;

