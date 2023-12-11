import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const Content = styled.div`
  border-radius: 4px;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};

  display: flex;
  flex-direction: column;
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
  font-size: 1.8rem;
`;

export const Details = styled.div`
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconStarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
`;
