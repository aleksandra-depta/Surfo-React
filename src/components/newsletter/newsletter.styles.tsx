import styled from "styled-components";
import { HeadingH1 } from "../../styled/typography";

export const Newsletter = styled.div<{
  background?: string;
}>`
  position: relative;
  text-align: left;
  color: ${(props) => props.theme.colors.whiteText};
  position: relative;
  height: 100vh;
  width: 100%;

  &::before {
    content: "";
    background-image: url(${require(`../../img/bg02.jpg`)});
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    z-index: -80;
  }

  &::after {
    @media only screen and (min-width: 576px) {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 13rem;
      width: 1px;
      background-color: ${(props) => props.theme.colors.white20};
    }
  }
`;

export const Content = styled(Newsletter)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Heading = styled(HeadingH1)`
  font-size: 20rem;
  padding-top: 10vh;
  text-align: center;

  @media only screen and (max-width: 992px) {
    font-size: 14rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10rem 20rem 10rem 20rem;
  position: relative;

  @media only screen and (max-width: 576px) {
    padding: 10rem 10rem 10rem 5rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13rem;
    transform: translateX(-25%);
    width: 2.5px;
    background-color: ${(props) => props.theme.colors.white20};

    @media only screen and (max-width: 576px) {
      left: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    background-color: rgba(20, 20, 20, 0.36);
    z-index: -10;
  }
`;

export const FormNewsletter = styled.form`
  display: flex;
  width: 100%;
  justify-content: start;
  padding-top: 2rem;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InfoContent = styled.div`
  height: 2rem;
`;
