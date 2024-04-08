import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white20};
  position: relative;
  padding-top: 15rem;

  &::before {
    content: "";
    background-color: ${(props) => props.theme.colors.darkText};
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    top: 0rem;
    height: 100%;
    z-index: -80;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 25%;
  padding-bottom: 15rem;
`;
