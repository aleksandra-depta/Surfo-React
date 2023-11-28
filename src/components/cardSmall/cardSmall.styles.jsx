import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";
import { ButtonPrimary } from "../../styled/buttons";

export const Content = styled.div`
  border-radius: 4px;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  display: flex;
  flex-direction: column;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  margin: 5px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
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
  height: auto;
`;

export const BookmarkIcon = styled(IconBookmark)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const Details = styled.div`
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  height: 100%;
`;

export const Button = styled(ButtonPrimary)`
  margin-top: 1rem;
`;
