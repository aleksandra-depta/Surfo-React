import styled from "styled-components";
import { Link } from "react-router-dom";

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
    padding: 1rem 0rem;
    background-color: rgb(12, 12, 12);
    box-shadow: 0 1px 3px #0c0c0c;
  `};
`;

export const NavContainer = styled.div<{ stickyNav?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  align-items: center;

  ${({ stickyNav }) =>
    stickyNav &&
    `
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 992px) {
      gap: 2rem;
      justify-content: space-between;
      white-space: nowrap;
      padding-right: 2rem;
  
  }
  `};
`;

export const ImageLogo = styled.img`
  height: 2.3rem;
`;

export const LinkNav = styled(Link)`
  margin-right: 1rem;
  font-weight: 500;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    transform: scale(1.1);
  }
`;

export const LinkNavUser = styled(LinkNav)`
  display: flex;
  gap: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    transform: scale(1);
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
  font-size: 2rem;
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
  right: 4px;
  bottom: -2px;
`;
