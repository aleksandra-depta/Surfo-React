import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;

  &::before {
    content: "";
    z-index: -70;
    top: 0;
    bottom: 0;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 50vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.darkText};
  }
`;

export const Container = styled.div`
  margin-left: 13rem;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.white20};
  padding: 3.5rem 0 5rem 5rem;

  @media only screen and (max-width: 576px) {
    padding: 4rem 2rem 10rem 2rem;
  }
`;

export const NavLinkMyAccount = styled(NavLink)`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 576px) {
    font-size: 2rem;
  }

  &:hover {
    scale: 1.1;
    color: ${(props) => props.theme.colors.darkText};
  }

  &.active {
    font-weight: 700;
    scale: 1.1;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: 576px) {
    gap: 4rem;
  }
`;
