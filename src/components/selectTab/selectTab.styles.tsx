import styled from "styled-components";
import { ButtonSecondary } from "../../styled/buttons";

export const SearchTabContainer = styled.div`
  width: 90%;
`;

export const InputTab = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkText};
  font-size: 2.1rem;
  padding: 1.2rem;
  text-align: start;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InputTabSmall = styled(InputTab)`
  width: 80rem;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const ButtonTab = styled(ButtonSecondary)`
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
