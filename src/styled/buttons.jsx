import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonPrimary = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 2.4rem;
  font-weight: 600;
  border-radius: 5rem;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 2rem;
  text-align: center;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    transform: scale(102%);
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ButtonSecondaryInactive = styled(ButtonPrimary)`
  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};

  &:hover {
    background-color: ${(props) => props.theme.colors.whiteText};
    color: ${(props) => props.theme.colors.darkText};
    transform: scale(100%);
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

export const ButtonSmallPrimary = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.8rem;
  font-weight: 400;
  border-radius: 5rem;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    transform: scale(102%);
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ButtonSmallWhite = styled(ButtonSmallPrimary)`
  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const ButtonWhiteBasic = styled.button`
  border: 2px solid ${(props) => props.theme.colors.darkText};
  background-color: transparent;
  padding: 20px 100px;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  color: ${(props) => props.theme.colors.darkText};
  text-decoration: none;
  text-align: center;
  height: max-content;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightShades};
  }
`;
