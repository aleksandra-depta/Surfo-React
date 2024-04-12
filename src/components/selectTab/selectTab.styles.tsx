import styled from "styled-components";
import { ButtonSecondary } from "../../styled/buttons";

export const SearchTabContainer = styled.div`
  width: 90%;
  display: flex;

  @media only screen and (max-width: 1050px) {
    width: 50%;
    flex-direction: column;
  }

  @media only screen and (max-width: 992px) {
    width: 70%;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
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
  height: 9rem;
`;

export const InputTabSelect = styled(InputTab)`
  @media only screen and (max-width: 1050px) {
    border-bottom: 1px solid ${(props) => props.theme.colors.greyShades};
  }

  @media only screen and (min-width: 1050px) {
    border-right: 1px solid ${(props) => props.theme.colors.greyShades};
  }
`;

export const InputTabSmall = styled(InputTab)`
  width: 80rem;
  padding-left: 2.3rem;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }

  &:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.greyShades};

    @media only screen and (min-width: 380px) {
      border-right: 1px solid ${(props) => props.theme.colors.greyShades};
      border-bottom: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const SelectContent = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const DateContent = styled.div`
  display: flex;
  width: 40rem;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    width: 30rem;
    flex-direction: row;
    width: 100%;
  }
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

export const ButtonTab = styled(ButtonSecondary)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  color: ${(props) => props.theme.colors.whiteText};

  @media only screen and (max-width: 1050px) {
    width: 100%;
    flex-direction: column;
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
