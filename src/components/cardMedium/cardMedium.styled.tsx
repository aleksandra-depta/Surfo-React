import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const Content = styled.div`
  border-radius: 4px;
  position: relative;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

export const BookmarkIcon = styled(IconBookmark)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.8rem;
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: max-content;
  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.colors.darkTextTransp};
  color: ${(props) => props.theme.colors.whiteText};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IconStarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
