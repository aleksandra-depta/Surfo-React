import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 8rem;

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

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageItem = styled.img`
  max-width: 20rem;
  max-height: auto;
  margin: 20px;
`;

export const IconTrash = styled.button`
  border: none;
  background-color: transparent;
  height: max-content;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const LinkContent = styled(Link)`
  display: flex;
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
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
