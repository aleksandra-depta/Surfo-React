import styled from "styled-components";

export const Content = styled.div<{ user: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: start;
  height: 100%;
  width: 50%;
  white-space: nowrap;
  padding-top: 10vh;

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
