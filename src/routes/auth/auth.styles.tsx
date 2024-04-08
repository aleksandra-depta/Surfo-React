import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0rem;
    left: 11rem;
    height: 100vh;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/bgAuth.jpg`)});
    background-size: cover;
    background-position: center center;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    height: 100vh;
    z-index: -80;
  }
`;
