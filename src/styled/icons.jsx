import styled from "styled-components";

export const IconBookmark = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    scale: 1.02;
  }
`;

export const IconStar = styled.div`
  color: ${(props) => props.theme.colors.secondary};
`;

export const IconCounter = styled.div`
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

export const IconSocialMedia = styled.div`
  color: ${(props) => props.theme.colors.greyShades};

  &:hover {
    color: ${(props) => props.theme.colors.darkText};
  }
`;

export const IconCheckmark = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

export const IconPin = styled.div`
  color: ${(props) => props.theme.colors.secondary};
`;

export const IconForm = styled.div`
  color: ${(props) => props.theme.colors.darkText};
`;

export const IconClose = styled.div`
  color: ${(props) => props.theme.colors.greyShades};
`;

export const IconGrey = styled.div`
  color: ${(props) => props.theme.colors.greyShades};
`;
