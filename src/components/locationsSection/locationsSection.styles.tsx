import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  color: ${(props) => props.theme.colors.whiteText};
  text-transform: uppercase;
  padding: 20rem 0;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem;
  }
  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 6rem;
    padding-right: 6rem;
    margin-top: 10rem;
  }

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
