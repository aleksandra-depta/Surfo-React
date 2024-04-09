import styled from "styled-components";
import { TextWhite } from "../../styled/typography";

export const Container = styled.div`
  height: 120vh;
  width: 100%;
  max-height: 120rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  position: relative;

  @media only screen and (max-width: 992px) {
    max-height: 156rem;
  }
  @media only screen and (max-width: 576px) {
    height: 180vh;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0rem;
    left: 13rem;
    height: 120vh;
    max-height: 130rem;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};

    @media only screen and (max-width: 992px) {
      max-height: 156rem;
    }
    @media only screen and (max-width: 576px) {
      height: 180vh;
    }
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/bg01.jpg`)});
    background-size: cover;
    background-position: center end;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    height: 120vh;
    max-height: 120rem;
    z-index: -80;

    @media only screen and (max-width: 992px) {
      max-height: 156rem;
    }
    @media only screen and (max-width: 576px) {
      height: 180vh;
    }
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

  @media only screen and (max-width: 768px) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 6rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    gap: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13rem;
    width: 2.5px;
    background-color: ${(props) => props.theme.colors.white20};
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
    margin: 5rem 0;
    margin-left: auto;
    max-width: 50rem;
  }
  @media only screen and (max-width: 576px) {
    width: 50rem;
    margin-right: 2rem;
  }
`;
