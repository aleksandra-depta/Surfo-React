import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";

export const SliderCardLarge = styled.div`
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-in-out;

  @media only screen and (min-width: 768px) {
    width: 41rem;
    height: 70rem;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Details = styled.div`
  padding: 24px 24px 10px 24px;
  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  text-align: center;
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
  font-size: 1.8rem;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  overflow: hidden;

  @media only screen and (min-width: 1200px) {
    height: 58rem;
  }
`;
