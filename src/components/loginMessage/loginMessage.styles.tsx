import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10rem;
  background-color: ${(props) => props.theme.colors.white20};
  color: ${(props) => props.theme.colors.darkText};

  @media only screen and (max-width: 1200px) {
    gap: 2rem;
  }
`;
