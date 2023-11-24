import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 5rem;
`;

export const SectionContainer = styled.div`
  margin: 8rem 0;
  text-align: center;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Heading = styled(Link)`
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: #d2e1e1da;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border-radius: 40px;
  width: max-content;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightShades};
    color: ${(props) => props.theme.colors.darkText};
  }

  ${({ active }) =>
    active === true &&
    `
  background: #eeeeee
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
