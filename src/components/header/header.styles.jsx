import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 100vh;
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(props) => props.theme.colors.whiteText};
`;

export const Content = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 1.7rem;
  text-align: center;
`;
