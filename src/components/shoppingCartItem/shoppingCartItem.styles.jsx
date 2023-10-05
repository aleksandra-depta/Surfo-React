import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem 0;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.greyShades};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.lightShades};
  }
`;

export const ItemContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageItem = styled.img`
  max-width: 25rem;
  max-height: auto;
  margin: 20px;
`;

export const IconTrash = styled.button`
  border: none;
  background-color: transparent;
  height: max-content;
`;

export const LinkContent = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const PriceContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
