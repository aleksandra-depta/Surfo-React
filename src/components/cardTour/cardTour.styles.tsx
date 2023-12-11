import styled from "styled-components";
import { IconBookmark } from "../../styled/icons";
import { ButtonSecondary, ButtonSecondaryInactive } from "../../styled/buttons";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  background-color: ${(props) => props.theme.colors.white};

  border-radius: 80px;
  border: 30px solid ${(props) => props.theme.colors.white};

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 50px;
    border: 15px solid ${(props) => props.theme.colors.white};
  }
`;

export const ImageTour = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    border-radius: 40px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  position: relative;
`;

export const BookmarkIcon = styled(IconBookmark)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.8rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const RowStars = styled(Row)`
  gap: 8rem;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  text-align: center;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonInactive = styled(ButtonSecondaryInactive)`
  border-radius: 2px;
  min-width: 20rem;
`;

export const ButtonActive = styled(ButtonSecondary)`
  border-radius: 2px;
  min-width: 20rem;
`;
