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
  padding: 2rem 4rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const LinkContent = styled(Link)`
  display: flex;
  flex-direction: column;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 10rem 4rem 4rem;
  gap: 4rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 4rem;
  }
`;

export const ImageItem = styled.img`
  max-width: 25rem;
  max-height: auto;
  border-radius: 20px;

  @media only screen and (max-width: 992px) {
    max-width: 16rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1px;
`;

export const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
`;
