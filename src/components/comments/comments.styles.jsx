import styled from "styled-components";
import { ButtonPrimary } from "../../styled/buttons";
import { IconClose } from "../../styled/icons";
import { HeadingH3 } from "../../styled/typography";

export const FormComment = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 100px;

  @media only screen and (max-width: 768px) {
    border-radius: 20px;
    align-items: start;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.white};
  padding: 5rem;
  border-radius: 100px;

  @media only screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;

export const List = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding-left: 2rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const ImageUser = styled.img`
  border-radius: 50%;
  width: 12rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const ContentDetails = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonComment = styled(ButtonPrimary)`
  padding: 4rem;
  width: 34rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
  }
`;

export const TextareaComment = styled.textarea`
  width: 100%;
  min-height: 10rem;
  font-size: 2rem;
  padding: 2rem;
  border: none;
  border-radius: 10px;
  outline: none;

  @media only screen and (max-width: 768px) {
    min-height: 12rem;
  }
`;

export const CloseIcon = styled(IconClose)`
  position: absolute;
  right: 2rem;
  top: 0;
  cursor: pointer;
`;

export const UserName = styled(HeadingH3)`
  position: relative;
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;

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
