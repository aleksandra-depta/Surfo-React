import styled from "styled-components";
import { TextWhite } from "../../styled/typography";

export const MapContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20rem 0;
  position: relative;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 5rem;
    padding: 10rem 0;
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/bgMap.jpg`)});
    background-size: cover;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    top: 0;
    bottom: 0;
    z-index: -80;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0rem;
    left: 13rem;
    height: 140vh;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }
`;

export const MapDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 40vw;
  margin-left: 13rem;
  padding-left: 7rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2.5px;
    background-color: ${(props) => props.theme.colors.white20};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Link = styled(TextWhite)`
  font-size: 3rem;
  transition: all 0.2s ease-out;
  width: 30rem;
  padding-bottom: 2rem;
`;

export const MapContent = styled.div`
  width: 100%;

  @media only screen and (max-width: 992px) {
    padding-left: 20rem;
  }

  @media only screen and (max-width: 576px) {
    padding-left: 0rem;
  }
`;
