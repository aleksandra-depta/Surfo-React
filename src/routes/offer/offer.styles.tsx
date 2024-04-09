import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -100;
  height: auto;
  width: 100vw;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;

  @media only screen and (max-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

export const ShowContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const SeeMoreHeading = styled.div`
  padding: 0 0 10rem 0;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Slider = styled.div`
  width: 70%;
  position: relative;
  margin-right: 12rem;

  @media only screen and (max-width: 1200px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 992px) {
    margin-right: 10rem;
    width: 100%;
  }
`;

export const SliderFullWidth = styled.div`
  position: relative;
  margin: 0 10rem;

  @media only screen and (max-width: 1200px) {
    margin: 0;
  }
`;

export const Heading = styled(Link)<{ active: boolean }>`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
    font-size: 4rem;
  }

  ${({ active }) =>
    active === true &&
    `
    font-size: 4rem;
  `}
`;

export const ClearLink = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 2rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
    font-size: 2.3rem;
  }
`;
