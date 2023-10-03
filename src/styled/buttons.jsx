import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonPrimary = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.whiteText};
  font-size: 2.4rem;
  font-weight: 600;
  border-radius: 5rem;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 2rem 0;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(102%);
  }
`;

export const ButtonWhite = styled(ButtonPrimary)`
  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.whiteText};
  }
`;
