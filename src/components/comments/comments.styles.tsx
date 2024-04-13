import styled from "styled-components";
import { IconClose } from "../../styled/icons";
import { HeadingH3 } from "../../styled/typography";

export const Container = styled.div`
  height: 45rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.colors.darkText};
  }
`;

export const ContainerComment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white20};
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  @media only screen and (max-width: 992px) {
    padding: 0;
  }
`;

export const List = styled.div`
  margin: 3rem 0;
  padding-right: 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  gap: 4rem;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ImageUser = styled.img`
  border-radius: 50%;
  width: 12rem;
  padding-left: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const CloseIcon = styled(IconClose)`
  position: absolute;
  right: 2rem;
  top: 0;
  cursor: pointer;
  font-size: 1.3rem;
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
