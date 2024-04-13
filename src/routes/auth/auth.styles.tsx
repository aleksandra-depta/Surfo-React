import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: start;
  position: relative;
  padding: 10rem 0 1rem 0;

  &::after {
    content: "";
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 13rem;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/bgAuth.jpg`)});
    background-size: cover;
    background-position: center center;
    position: absolute;
    right: calc(-1 * (100vw - 100%) / 2);
    left: calc(-1 * (100vw - 100%) / 2);
    top: 0;
    bottom: 0;
    z-index: -80;
  }
`;
