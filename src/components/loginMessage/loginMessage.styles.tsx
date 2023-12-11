import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.white};
  padding: 5rem;
  border-radius: 100px;

  @media only screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;
