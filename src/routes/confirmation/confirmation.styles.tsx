import styled from "styled-components";
import { ButtonBlack } from "../../styled/buttons";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0rem;
    left: 13rem;
    height: 100vh;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/bg01.jpg`)});
    background-size: cover;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    height: 100vh;
    z-index: -80;
  }
`;

export const Content = styled.div`
  margin-left: 13rem;
  width: 40%;
  padding: 8rem;
  background-color: ${(props) => props.theme.colors.darkTextTransp};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 4rem;
  padding-top: 2rem;
`;

export const Button = styled(ButtonBlack)`
  width: max-content;
`;

export const Logo = styled.img`
  width: 20rem;
`;

export const Slider = styled.div`
  width: 54.5vw;
  position: relative;
`;
