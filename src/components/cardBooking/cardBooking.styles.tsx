import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
`;

export const Heading = styled.div`
  background-color: ${(props) => props.theme.colors.darkText};
  color: ${(props) => props.theme.colors.white};
  padding: 2rem;
  margin-left: -2rem;
`;

export const LinkContent = styled(Link)`
  display: flex;
  flex-direction: column;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const Image = styled.img`
  max-width: auto;
  max-height: 40rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-left: 2rem;
  background-color: ${(props) => props.theme.colors.white20};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};

  &:hover {
    transform: translateX(-10px);
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;
