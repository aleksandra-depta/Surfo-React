import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.lightShades};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  height: 50vh;
  width: 50vw;
  transform: translate(50%, 50%);
  border: 2px solid ${(props) => props.theme.colors.darkText};
  border-radius: 4px;
  padding: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const ImageLogo = styled.img`
  width: 20rem;
`;
