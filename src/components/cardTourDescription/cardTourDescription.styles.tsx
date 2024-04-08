import styled from "styled-components";

export const Container = styled.div`
  margin: 10rem 0;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
