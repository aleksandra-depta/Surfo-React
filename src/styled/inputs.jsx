import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-radius: 50rem;
  padding: 1.6rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
`;

export const InputFrom = styled(Input)`
  border: 1px solid ${(props) => props.theme.colors.greyShades};
  width: 100%;
  border-radius: 40px;
`;

export const InputRow = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.greyShades};
  font-size: 1.8rem;
  font-weight: 400;
  text-align: start;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.3rem;
`;

export const InfoMessage = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.4em;
  font-weight: 600;
`;
