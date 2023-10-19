import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightShades};
  }
`;

export const HeadingContent = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 3rem;
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 10rem 4rem 4rem;
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const ImageItem = styled.img`
  max-width: 25rem;
  max-height: auto;
  border-radius: 20px;
`;

export const LinkContent = styled(Link)`
  display: flex;
  flex-direction: column;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 200px;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
`;
