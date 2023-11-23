import styled from "styled-components";

export const Newsletter = styled.div`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.colors.whiteText};
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 80px;
  overflow: hidden;
`;

export const ImageBackground = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
`;

export const Content = styled(Newsletter)`
  z-index: 30;
`;

export const FormNewsletter = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: max-content;
`;
