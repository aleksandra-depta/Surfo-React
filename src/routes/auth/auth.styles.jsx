import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  border-radius: 90px;
  border: 30px solid ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  z-index: 10;

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 14rem;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 50px;
  }
`;

export const Content = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
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
