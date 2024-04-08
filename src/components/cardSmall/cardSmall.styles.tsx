import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";
import { ButtonBlack } from "../../styled/buttons";

export const Content = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 5px;
  transition: all 0.2s ease-in-out;

  @media only screen and (min-width: 576px) {
    height: 56rem;
    max-width: 320px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ContentDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageCard = styled.img`
  width: 100%;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};

  @media only screen and (min-width: 992px) {
    height: 40rem;
  }
`;

export const BookmarkIcon = styled(IconBookmark)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.8rem;
`;

export const Details = styled.div`
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  background-color: ${(props) => props.theme.colors.whiteText};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Button = styled(ButtonBlack)`
  margin-top: 1rem;
`;
