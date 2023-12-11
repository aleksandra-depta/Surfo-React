import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkGrey, LinkWhite } from "../../styled/typography";

export const BackgroundImage = styled.img`
  width: 100%;
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const NavContainer = styled.div`
  height: 12rem;
`;

export const Nav = styled.div<{ stickyNav?: boolean }>`
  height: 5rem;
  width: 100%;
  padding: 6rem 0rem;
  z-index: 10000;
  display: flex;
  align-items: center;

  ${({ stickyNav }) =>
    stickyNav &&
    `
    position: fixed;
    left: 0;
    right: 0;
    padding: 4rem 0rem;
    background-color: #f5f4f4;
    box-shadow: 0 1px 1rem #d3cece30;
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media only screen and (max-width: 576px) {
    gap: 3rem;
  }
`;

export const ImageLogo = styled.img`
  height: 2.2rem;
`;

export const ImageUser = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;

export const LinksUser = styled(LinkWhite)`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-right: 1rem;
`;

export const LinkNav = styled(Link)<{ stickyNav?: boolean }>`
  position: relative;
  font-weight: 600;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.colors.white};

  ${({ stickyNav }) =>
    stickyNav &&
    `
    color: #060606;
  `}

  &:hover {
    color: ${(props) => props.theme.colors.white};
    transform: translateY(-1px);

    ${({ stickyNav }) =>
      stickyNav &&
      `
    color: #060606;
  `}
  }
`;

export const NavMenu = styled.div<{ active?: boolean }>`
  z-index: 1000;
  display: flex;

  ${({ active }) =>
    active === true &&
    `
  background: #d2e1e1da;
  padding: 10px;
  border-radius: 40px;
  display: flex;
  gap: 2rem;
  `}
`;

export const NavMenuContent = styled.div`
  padding: 1rem;
`;

export const LinkNavMenu = styled(LinkGrey)`
  width: max-content;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  background-color: ${(props) => props.theme.colors.lightShades};
  color: ${(props) => props.theme.colors.greyShades};

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.greyShades};
  }
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
  right: -8px;
  bottom: -8px;
`;
