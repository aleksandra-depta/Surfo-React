import styled from "styled-components";

export const IconBookmark = styled.div`
  height: 2.5rem;
  width: 2.5rem;
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
  width: 2.4rem;
  height: 2.4rem;
  color: ${(props) => props.theme.colors.greyShades};
`;
