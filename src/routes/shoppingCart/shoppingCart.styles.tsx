import styled from "styled-components";
import { ButtonBlack } from "../../styled/buttons";

export const Container = styled.div`
  /* margin-left: 13rem; */
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
    background-color: ${(props) => props.theme.colors.darkText};
  }
`;

export const Content = styled.div`
  margin-left: 13rem;
  padding: 12rem 0 5rem 5rem;
  background-color: ${(props) => props.theme.colors.white20};
  min-height: 100vh;

  @media only screen and (max-width: 576px) {
    padding: 4rem 2rem 10rem 2rem;
  }
`;

export const SliderContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Slider = styled.div`
  width: 60%;
  position: relative;
  margin-right: 10rem;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding-right: 14rem;
  }

  @media only screen and (max-width: 576px) {
    margin-right: auto;
    padding-right: 0;
  }
`;

export const ShopingCartContainer = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
`;

export const IconRemove = styled.div`
  padding: 8rem 0;
  display: flex;
  align-items: center;
`;

export const TotalsContainer = styled.div`
  margin-top: 8rem;
  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.colors.darkText};
  color: ${(props) => props.theme.colors.white20};
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  border-radius: 4px;
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 8rem;
`;

export const PaymentContainer = styled.div`
  padding-bottom: 20rem;
`;

export const PaymentButton = styled(ButtonBlack)`
  margin-top: 8rem;
`;
