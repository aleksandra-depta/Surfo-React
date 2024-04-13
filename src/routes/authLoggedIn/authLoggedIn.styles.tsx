import styled from "styled-components";

export const Content = styled.div<{ user: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: start;
  height: max-content;
  white-space: nowrap;

  ${({ user }) =>
    !user &&
    `
    background-color: #fbfafa;
  `};
`;

export const LogoImage = styled.img`
  width: 8rem;
`;

export const ButtonsContent = styled.div`
  padding-top: 4rem;
  display: flex;
  gap: 4rem;
`;
