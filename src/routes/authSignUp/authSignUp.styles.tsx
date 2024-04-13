import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div<{ user: boolean }>`
  padding: 2rem 5rem 5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  height: max-content;
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-left: 15rem;
    padding: 2rem;
  }

  ${({ user }) =>
    !user &&
    `
    background-color: #fbfafa;
  `};
`;

export const ButtonsContent = styled.div`
  padding-top: 4rem;
  display: flex;
  gap: 4rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LinkActive = styled(Link)`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    scale: 102%;
  }
`;
export const LinkInactive = styled(LinkActive)`
  font-size: 2.3rem;
  color: ${(props) => props.theme.colors.greyShades};
`;
