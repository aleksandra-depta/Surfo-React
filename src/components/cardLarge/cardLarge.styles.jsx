import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const SliderCardLarge = styled.div`
  width: 41rem;
  height: 72rem;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
`;

export const Details = styled.div`
  margin: 1.2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primaryHalf};
  color: ${(props) => props.theme.colors.whiteText};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BookmarkIcon = styled(IconBookmark)`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 1000;
`;

export const ImageCard = styled.img`
  width: auto;
  height: 100%;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 6px;
  padding-top: 6px;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    top: 0;
    background-color: ${(props) => props.theme.colors.whiteText};
  }
`;

export const RowItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ImageDifficulty = styled.img`
  height: 12px;
`;
