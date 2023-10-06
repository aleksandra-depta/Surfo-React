import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-radius: 50rem;
  padding: 2.2rem;
  font-size: 2rem;
`;

export const InputFrom = styled(Input)`
  border: 1px solid ${(props) => props.theme.colors.greyShades};
  width: 100%;
  border-radius: 40px;
`;
