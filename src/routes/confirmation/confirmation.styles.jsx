import styled from "styled-components";
import { ButtonSecondary } from "../../styled/buttons";

export const Container = styled.div`
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  padding: 10rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding-top: 2rem;
`;

export const Button = styled(ButtonSecondary)`
  width: max-content;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 6rem;
`;

export const LogoCart = styled.img`
  width: 20rem;
`;
