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
  min-height: 80vh;

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 14rem;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 50px;
    border: 15px solid ${(props) => props.theme.colors.white};
  }
`;

export const Content = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
`;

export const LoggedInContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  height: 100%;
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
  gap: 1rem;
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
