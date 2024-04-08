import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const Button = styled(Link)<{ props: DefaultTheme }>`
  font-size: 2.4rem;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 2rem;
  text-align: center;
  transition: all 0.2s;
  white-space: nowrap;
  height: max-content;

  &:hover {
    transform: scale(102%);
    text-decoration: none;
  }
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ButtonSecondaryInactive = styled(Button)`
  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};

  &:hover {
    background-color: ${(props) => props.theme.colors.whiteText};
    color: ${(props) => props.theme.colors.darkText};
    transform: scale(100%);
  }
`;

export const ButtonSmallWhite = styled(Button)`
  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1rem 2rem;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const ButtonBlack = styled(Button)`
  background-color: ${(props) => props.theme.colors.darkText};
  color: ${(props) => props.theme.colors.whiteText};

  &:hover {
    color: ${(props) => props.theme.colors.whiteText};
  }
`;

export const ButtonRawWhite = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.darkText};
  border: 1px solid ${(props) => props.theme.colors.darkText};
  border-radius: 50px;
  font-family: "Roboto", sans-serif;
  height: max-content;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const ButtonRawWhiteSmall = styled(ButtonRawWhite)`
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 30px;
`;
