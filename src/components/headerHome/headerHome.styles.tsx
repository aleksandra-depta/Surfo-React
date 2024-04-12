import styled from "styled-components";
import { showHide } from "../../styled/keyframes";

export const HeadingContainer = styled.div`
  height: 100vh;
  max-height: 140rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -15rem;
    bottom: 0;
    left: 13rem;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/headerHome.jpg`)});
    background-size: cover;
    background-position: 30% 0%;
    position: absolute;
    top: 0;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    height: 100vh;
    max-height: 140rem;
    z-index: -80;
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 20rem;
  position: absolute;
  right: 0;
  top: 30rem;

  @media only screen and (max-width: 992px) {
    font-size: 14rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 6rem;
  }

  &::before {
    content: "";
    animation: ${showHide} 8s infinite;
  }
`;
