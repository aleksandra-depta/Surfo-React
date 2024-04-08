import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 0;
  position: relative;
  color: ${(props) => props.theme.colors.whiteText};
  text-transform: uppercase;

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
  justify-content: space-between;

  @media only screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Icon = styled.img`
  max-width: 20rem;
`;
