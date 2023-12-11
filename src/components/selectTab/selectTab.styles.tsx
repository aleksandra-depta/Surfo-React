import styled from "styled-components";
import { ButtonSecondary } from "../../styled/buttons";

export const SearchTabContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: 1rem;
  padding: 4rem;
  margin-bottom: 6rem;
  width: 100%;

  ${() =>
    window.location.pathname === "/offer" &&
    `
    background: #d2e1e1da;
  `}

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputTab = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkText};
  font-size: 2.1rem;
  padding: 1.2rem;
  text-align: start;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    grid-template-rows: 1fr;
  }
`;

export const ButtonTab = styled(ButtonSecondary)`
  border-radius: 2px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.darkText};
  text-align: center;
`;

export const LogoTab = styled.img`
  height: 5rem;
`;
