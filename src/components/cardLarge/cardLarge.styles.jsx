import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const SliderCardLarge = styled.div`
  max-width: 50rem;
  height: 72rem;
  border-radius: 50px;
  overflow: hidden;
  position: relative;

  /* @media only screen and (max-width: $bp-831) {
    grid-column: 2/3;
    align-items: center;
  }
  @media only screen and (max-width: $bp-565) {
    max-width: 35rem;
    height: 65rem;
  }
  @media only screen and (max-width: $bp-320) {
    border-radius: 35px;
  } */
`;

export const Details = styled.div`
  margin: 1.2rem;
  padding: 3rem;
  background-color: rgba(58, 150, 150, 0.8);
  color: ${(props) => props.theme.colors.whiteText};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
  padding-top: 10px;

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

export const ImageDifficulty = styled.img`
  height: 12px;
`;
