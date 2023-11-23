import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../../styled/buttons";

export const MainContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  background-color: ${(props) => props.theme.colors.white};
  padding: 6rem 10rem 10rem 10rem;
  width: 100%;
  min-height: 75vh;
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

  background-color: ${(props) => props.theme.colors.whiteText};
  color: ${(props) => props.theme.colors.darkText};

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
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
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 4rem;

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
  gap: 4rem;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: max-content;
`;

export const CardContainer = styled.div`
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 5rem;
`;

export const ImageUser = styled.img`
  width: 13rem;
`;

export const Button = styled(ButtonSecondary)`
  margin-bottom: 4rem;
`;

export const ButtonEdit = styled(ButtonPrimary)`
  width: 24rem;
  height: max-content;
`;
