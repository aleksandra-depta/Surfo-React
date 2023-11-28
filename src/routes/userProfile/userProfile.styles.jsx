import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary } from "../../styled/buttons";

export const MainContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  background-color: ${(props) => props.theme.colors.white20};
  padding: 6rem 10rem 10rem 10rem;
  width: 100%;
  min-height: 75vh;

  @media only screen and (max-width: 992px) {
    padding: 3rem;
  }
`;

export const NavLinkMyAccount = styled(NavLink)`
  font-size: 2.4rem;
  font-weight: 600;
  border-radius: 5px 0 0 5px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 2rem;
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 4px;
  z-index: 100;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary20};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightShades};
    color: ${(props) => props.theme.colors.darkText};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.whiteText};
    color: ${(props) => props.theme.colors.darkText};

    &:hover {
      /* background-color: ${(props) => props.theme.colors.secondary}; */
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 16rem;
`;

export const Content = styled.div`
  margin-top: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 4rem;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.greyShades};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  width: 20rem;
  margin-left: -1.8rem;

  @media only screen and (max-width: 768px) {
    width: 8rem;
    margin-left: -0.8rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.greyShades};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Headings = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const RowItem = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  background-color: ${(props) => props.theme.colors.whiteText};
  padding: 2rem;
  margin: 0 2rem 2rem 2rem;
  border-radius: 40px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 5rem;
`;

export const ImageUser = styled.img`
  width: 13rem;
  border-radius: 100%;
`;

export const ButtonEdit = styled(ButtonPrimary)`
  width: 24rem;
  height: max-content;

  @media only screen and (max-width: 768px) {
    width: 10rem;
  }

  ${({ button }) =>
    button &&
    `
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center

  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
