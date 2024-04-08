import styled from "styled-components";
import { ButtonRawWhite } from "../../styled/buttons";

export const Headings = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 4rem;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.greyShades};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.greyShades};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowItem = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.whiteText};
  padding: 2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageUser = styled.img`
  width: 13rem;
  border-radius: 100%;
`;

export const ButtonEdit = styled(ButtonRawWhite)<{ button: boolean }>`
  width: 18rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 576px) {
    width: 10rem;
    height: 5rem;
    font-size: 2rem;
  }

  ${({ button }) =>
    button &&
    `
    border: none
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
