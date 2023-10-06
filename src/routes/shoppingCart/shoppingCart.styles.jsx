import styled from "styled-components";
import { ButtonSecondary } from "../../styled/buttons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  padding: 10rem;
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
