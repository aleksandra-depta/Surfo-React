import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const Content = styled.div`
  border-radius: 4px;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.lightShades};
  display: flex;
  flex-direction: column;
  max-width: 500px;
  position: relative;
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
