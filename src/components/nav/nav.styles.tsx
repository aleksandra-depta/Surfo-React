import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div<{ stickyNav?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;

  @media only screen and (max-width: 576px) {
    flex-direction: row;
    gap: 6rem;
  }

  ${({ stickyNav }) =>
    stickyNav &&
    `
    flex-direction: row;
  `};
`;

export const Nav = styled.div<{ stickyNav?: boolean }>`
  z-index: 10000;
  padding: 4rem 0rem;
  position: absolute;
  top: 0;
  font-family: "Roboto", sans-serif;

  ${({ stickyNav }) =>
    stickyNav &&
    `
    position: fixed;
    left: 0;
    right: 0;
    padding: 2rem 0rem;
    background-color: rgb(12, 12, 12);
    box-shadow: 0 1px 3px #0c0c0c;
  `};
`;

export const NavContainer = styled.div<{ stickyNav?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  align-items: end;

  @media only screen and (max-width: 576px) {
    flex-direction: row;
    gap: 0;
  }

  ${({ stickyNav }) =>
    stickyNav &&
    `
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 992px) {
      white-space: nowrap;
      gap: 3rem;
  }
  `};
`;

export const ImageLogo = styled.img`
  height: 2rem;
`;

export const LinkContainer = styled.div<{ stickyNav?: boolean }>`
  width: 13rem;
  text-align: center;

  @media only screen and (max-width: 576px) {
    width: max-content;
  }

  ${({ stickyNav }) =>
    stickyNav &&
    `
   width: max-content
  }
  `};
`;

export const LinkNav = styled(Link)`
  margin-right: 1rem;
  font-weight: 600;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  transition: all 0.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 2rem;
  width: 100%;

  @media only screen and (max-width: 576px) {
    width: max-content;
    padding: 0 3rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
    transform: scale(1.1);
  }
`;

export const LinkNavUserName = styled.span<{ stickyNav?: boolean }>`
  color: ${(props) => props.theme.colors.white};

  ${({ stickyNav }) =>
    !stickyNav &&
    `
    display: none;
   `}
`;

export const Icon = styled.div`
  font-size: 1.8rem;
  position: relative;
`;

export const IconFav = styled(Icon)`
  color: ${(props) => props.theme.colors.secondary};
`;

export const CartIcon = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  right: -10px;
  bottom: 0;
`;
