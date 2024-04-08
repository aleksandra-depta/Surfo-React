import styled from "styled-components";

export const FormComment = styled.form`
  width: 100%;
  display: flex;
`;

export const ContentDetails = styled.div`
  display: flex;
  width: 100%;
`;

export const TextareaComment = styled.textarea`
  width: 100%;
  min-height: 8rem;
  font-size: 2rem;
  padding: 1rem;
  border: none;
  border-left: 20px solid ${(props) => props.theme.colors.darkText};
  background-color: ${(props) => props.theme.colors.white20};
  outline: none;
  max-height: 200px;
`;
