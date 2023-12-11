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

    @media only screen and (max-width: 1540px) {
      display: none;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.lightShades};
  }

  @media only screen and (max-width: 992px) {
    flex-direction: row-reverse;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border: 20px solid ${(props) => props.theme.colors.primaryHalf};
    border-radius: 50px;
    padding: 2rem;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    border: 10px solid ${(props) => props.theme.colors.primaryHalf};
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

  @media only screen and (max-width: 992px) {
    gap: 10px;
  }
`;

export const ImageItem = styled.img`
  max-width: 20rem;
  max-height: auto;
  margin: 20px;

  @media only screen and (max-width: 992px) {
    margin: 0;
    border-radius: 30px;
    max-width: 30rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const IconTrash = styled.button`
  border: none;
  background-color: transparent;
  height: max-content;

  @media only screen and (max-width: 992px) {
    position: absolute;
    top: 3.5rem;
    right: 1.5rem;
  }
`;

export const LinkContent = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }

  @media only screen and (max-width: 992px) {
    justify-content: left;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const PriceContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const Price = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
    padding-left: 16px;
  }
`;
