import styled from "styled-components";
import { ButtonSecondary, ButtonSecondaryInactive } from "../../styled/buttons";
import { IconBookmark } from "../../styled/icons";

export const Header = styled.div<{ bg: number | string }>`
  height: 100vh;
  max-height: 140rem;
  position: relative;
  text-align: end;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media only screen and (max-width: 768px) {
  }

  &::after {
    content: "";
    position: absolute;
    overflow: hidden;
    top: 0rem;
    left: 13rem;
    height: 100vh;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::before {
    content: "";
    background-image: ${(props) =>
      `url(${require(`../../img/tour${props.bg}.jpg`)})`};
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    height: 100vh;
    max-height: 140rem;
    z-index: -80;
  }
`;

export const Title = styled.h1`
  font-size: 20rem;
  color: ${(props) => props.theme.colors.whiteText};
  width: 55vw;
  white-space: initial;

  @media only screen and (max-width: 992px) {
    font-size: 14rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 8rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.white20};
  margin-top: 4rem;

  @media only screen and (max-width: 460px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 460px) {
    padding: 2rem;
  }
`;

export const PriceText = styled.div`
  font-size: 5rem;
  padding-left: 3rem;

  @media only screen and (max-width: 460px) {
    padding: 0;
  }
`;

export const ButtonInactive = styled(ButtonSecondaryInactive)`
  border-radius: 2px;
  min-width: 20rem;

  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const ButtonActive = styled(ButtonSecondary)`
  border-radius: 2px;
  min-width: 20rem;

  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const BookmarkIcon = styled(IconBookmark)`
  position: absolute;
  top: 4rem;
  right: 0;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
`;