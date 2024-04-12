import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white20};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ImageUser = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
`;

export const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${(props) => props.theme.colors.darkText};
  background-color: ${(props) => props.theme.colors.whiteText};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.darkTextTransp};
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
