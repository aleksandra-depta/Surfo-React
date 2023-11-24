import styled from "styled-components";

export const RowTour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 10rem 0;

  @media only screen and (max-width: 992px) {
    gap: 3rem;
    padding: 6rem 0;
  }
`;

export const DescriptionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

    gap: 1rem;
  }
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 992px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const RowPin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
`;
