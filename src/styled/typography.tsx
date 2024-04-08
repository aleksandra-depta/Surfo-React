import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadingH1 = styled.h1`
  font-size: 7rem;
  font-weight: 700;
`;

export const HeadingH2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const HeadingH3 = styled.h3`
  font-size: 2.3rem;
  font-weight: 600;
  letter-spacing: 0.75px;
`;

export const HeadingH4 = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

//Text
export const Text = styled.p`
  font-weight: 200;
  letter-spacing: 0.75px;
  text-decoration: none;
`;

export const TextLarge = styled.p`
  font-size: 3.6rem;
`;

export const TextLargePrimary = styled(TextLarge)`
  color: ${(props) => props.theme.colors.primary};
`;

export const TextMedium = styled.p`
  font-size: 2.1rem;
`;

export const TextSmall = styled(Text)`
  font-size: 1.8rem;
`;

// Links
export const LinkPrimary = styled(Link)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    transform: scale(102%);
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LinkGrey = styled(Link)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.lightText};

  &:hover {
    transform: scale(102%);
    color: ${(props) => props.theme.colors.darkText};
  }
`;

//////////////////////////////

export const LinkWhite = styled(Link)`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.whiteText};

  &:hover {
    color: ${(props) => props.theme.colors.whiteText};
    transform: translateY(-1px);
  }
`;

export const TextWhite = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.whiteText};
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;
