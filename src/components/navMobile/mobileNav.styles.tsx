import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cointainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  padding: 4rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const LinkItem = styled(Link)`
  font-size: 3.4rem;
  font-weight: 600;
  padding: 4rem 4rem 4rem 6rem;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    background-color: ${(props) => props.theme.colors.greyLightShades};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHalf};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ImageLogo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

export const IconClose = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
`;
