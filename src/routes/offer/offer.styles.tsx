import { Link } from "react-router-dom";
import styled from "styled-components";

export const OfferSlider = styled.div`
  padding-top: 20rem;

  @media only screen and (max-width: 1200px) {
    padding-top: 10rem;
  }
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
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

export const ShowContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
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
  margin-right: 10rem;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 20rem;
    margin-right: 0rem;
  }
  @media only screen and (max-width: 992px) {
    padding-top: 5rem;
    width: 100%;
  }
`;

export const SeeMoreHeading = styled.div`
  padding: 0 0 10rem 0;
  @media only screen and (max-width: 1200px) {
    padding: 0 0 5rem 0;
  }
`;

export const SliderFullWidth = styled.div`
  position: relative;
  margin: 0 10rem;

  @media only screen and (max-width: 1200px) {
    margin: 0;
    padding-right: 20rem;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
    padding: 0;
  }
`;
