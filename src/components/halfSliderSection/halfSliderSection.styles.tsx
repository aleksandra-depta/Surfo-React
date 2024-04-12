import { Link } from "react-router-dom";
import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
  @media only screen and (max-width: 576px) {
    padding-bottom: 5rem;
  }
`;

export const Slider = styled.div`
  width: 54%;
  position: relative;
  margin-right: 10rem;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding-right: 20rem;
  }

  @media only screen and (max-width: 576px) {
    padding-right: 0rem;
  }
`;

export const OfferLink = styled(Link)`
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
