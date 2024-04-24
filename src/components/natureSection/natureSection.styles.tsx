import styled from "styled-components";
import { TextWhite } from "../../styled/typography";

export const Container = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  position: relative;
  padding-bottom: 20rem;

  @media only screen and (max-width: 1200px) {
    margin-top: 10rem;
    padding-bottom: 10rem;
  }
  @media only screen and (max-width: 460px) {
    margin-top: 15rem;
  }

  &::after {
    @media only screen and (min-width: 576px) {
      content: "";
      position: absolute;
      top: 0rem;
      bottom: 0;
      left: 13rem;
      width: 1px;
      background-color: ${(props) => props.theme.colors.white20};
    }
  }
  &::before {
    content: "";
    background-image: url(${require(`../../img/bg01.jpg`)});
    background-size: cover;
    background-position: center end;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    top: 0;
    bottom: 0;
    z-index: -80;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  font-size: 20rem;
  color: ${(props) => props.theme.colors.whiteText};
  text-align: center;
  padding-top: 15rem;

  @media only screen and (max-width: 992px) {
    font-size: 14rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    padding-bottom: 10rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20rem;
  position: relative;

  @media only screen and (max-width: 992px) {
    gap: 3rem;
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 576px) {
    padding-left: 5rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13rem;
    width: 2.5px;
    background-color: ${(props) => props.theme.colors.white20};

    @media only screen and (max-width: 576px) {
      left: 0;
    }
  }
`;

export const Link = styled(TextWhite)`
  font-size: 3rem;
  transition: all 0.2s ease-out;
  width: 30rem;
`;

export const Cards = styled.div`
  width: 40vw;
  margin-top: 5rem;
  margin: 0 3rem;
  position: relative;
  margin-right: 10rem;

  @media only screen and (max-width: 992px) {
    padding-bottom: 2rem;
    margin-left: auto;
    margin-right: 0;
    width: 100%;
  }
`;
