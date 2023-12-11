import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 5rem;

  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const SectionContainer = styled.div`
  text-align: center;
  padding: 6rem 0;
`;

export const HeadingContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Heading = styled(Link)<{ active: boolean }>`
  color: ${(props) => props.theme.colors.darkText};
  background-color: ${(props) => props.theme.colors.lightShades};
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 40px;
  width: max-content;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary20};
    color: ${(props) => props.theme.colors.darkText};
  }

  ${({ active }) =>
    active === true &&
    `
  background: #d2e1e1da
  `}
`;

export const ClearLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.1;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
    transform: scale(1.05);
  }
`;

export const IconArrow = styled.div`
  cursor: pointer;
  scale: 1.6;
  transition: 0.1s all;
  text-align: center;
  margin-top: 20vh;

  &:hover {
    scale: 1.8;
  }
`;

export const SelectContainer = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: max-content;
  }
`;

export const OfferContainer = styled.div`
  padding-top: 10rem;
`;

export const SeeMoreContainer = styled.div`
  padding-top: 4rem;
`;

export const Content = styled.div`
  margin-bottom: 10rem;
`;
