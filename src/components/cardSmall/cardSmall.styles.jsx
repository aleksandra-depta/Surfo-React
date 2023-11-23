import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const Content = styled.div`
  border-radius: 4px;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  display: flex;
  flex-direction: column;
  max-width: 400px;
  position: relative;
  overflow: hidden;
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
`;
