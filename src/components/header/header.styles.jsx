import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100vh;
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(props) => props.theme.colors.whiteText};
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 1.7rem;
  text-align: center;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
`;

export const IconArrow = styled.div`
  cursor: pointer;
  scale: 1.6;
  transition: 0.1s all;
  text-align: center;

  &:hover {
    scale: 1.8;
  }
`;
