import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;

  &:focus-visible,
  &:focus {
    outline: none;
    border: none;
  }
`;
export const IconBookmark = styled.div`
  color: ${(props) => props.theme.colors.darkText};
  cursor: pointer;
  transition: all 0.2s;
  z-index: 100;

  &:hover {
    scale: 1.02;
  }
`;

export const IconStar = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
`;

export const IconCounter = styled(Button)`
  color: ${(props) => props.theme.colors.darkText};
  transition: all 0.2s;
  cursor: pointer;
  font-size: 2.3rem;

  &:hover {
    scale: 1.1;
  }
`;

export const IconSocialMedia = styled.div`
  color: ${(props) => props.theme.colors.greyShades};
  font-size: 1.6rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const IconCheckmark = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`;

export const IconPin = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.2rem;
`;

export const IconForm = styled.div`
  color: ${(props) => props.theme.colors.darkText};
  font-size: 1.4rem;
  padding-top: 14px;
`;

export const IconClose = styled.div`
  color: ${(props) => props.theme.colors.greyShades};
  font-size: 1.3rem;
`;

export const IconGrey = styled(Button)`
  color: ${(props) => props.theme.colors.greyShades};
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const IconWhite = styled(Button)`
  color: ${(props) => props.theme.colors.white};
  font-size: 3.6rem;
  padding-bottom: 6px;
`;
