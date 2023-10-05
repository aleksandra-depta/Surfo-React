import styled from "styled-components";
import { LinkGrey, LinkWhite } from "../../styled/typography";

export const Nav = styled.div`
  height: 5rem;
  width: 100%;
  padding: 8rem 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
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
`;

export const LinkNav = styled(LinkWhite)`
  font-weight: 600;
`;

export const NavMenu = styled.div`
  position: relative;
  z-index: 1000;

  ${({ active }) =>
    active === true &&
    `
  background: #f9bd24;
  width: 30rem;
  padding: 1rem 3rem;
  border-radius: 40px 40px 0 0;
  box-shadow: 0 1rem 2rem #f5f4f4; 
  `}
`;

export const NavMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 6rem;
  width: 30rem;
  border-radius: 0 0 40px 40px;
  background: ${(props) => props.theme.colors.lightShades};
  border: 1px solid ${(props) => props.theme.colors.greyLightShades};
`;

export const LinkNavMenu = styled(LinkGrey)`
  font-size: 2.3rem;
  font-weight: 600;
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.greyShades};
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.primaryHalf};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Icon = styled.div`
  margin-bottom: -10px;
`;
