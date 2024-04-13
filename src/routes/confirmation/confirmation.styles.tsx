import styled from "styled-components";
import { ButtonBlack } from "../../styled/buttons";

export const Container = styled.div`
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10rem 0;
  margin-bottom: 10rem;

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
    background-image: url(${require(`../../img/bg01.jpg`)});
    background-size: cover;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    top: 0;
    bottom: 0;
    z-index: -80;
  }
`;

export const Content = styled.div`
  margin-left: 13rem;
  width: 40%;
  padding: 8rem;
  background-color: ${(props) => props.theme.colors.darkTextTransp};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media only screen and (max-width: 1200px) {
    width: 70vw;
    padding: 4rem;
    margin-left: 13rem;
    margin-right: auto;
  }
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
  padding-bottom: 10rem;
  width: 54.5vw;
  position: relative;
`;
