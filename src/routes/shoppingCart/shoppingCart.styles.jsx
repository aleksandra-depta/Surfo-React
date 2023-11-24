import styled from "styled-components";
import { ButtonSecondary } from "../../styled/buttons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  background-color: ${(props) => props.theme.colors.white};
  padding: 6rem 10rem 10rem 10rem;
  width: 100%;
  min-height: 75vh;

  @media only screen and (max-width: 992px) {
    padding: 6rem 3rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoCart = styled.img`
  width: 20rem;
`;

export const ShopingCartContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    gap: 4rem;
  }
`;

export const TotalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;

export const Button = styled(ButtonSecondary)`
  width: max-content;
`;
