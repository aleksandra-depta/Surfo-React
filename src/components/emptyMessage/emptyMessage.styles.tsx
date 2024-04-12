import styled from "styled-components";

export const Content = styled.div`
  padding: 4rem 0 8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: top;

  @media only screen and (max-width: 420px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const HeadingContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 2rem;
  margin-right: 2rem;

  @media only screen and (max-width: 420px) {
    margin-right: 0rem;
  }
`;
