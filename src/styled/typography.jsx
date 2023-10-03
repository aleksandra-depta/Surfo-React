import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadingH1 = styled.h1`
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
`;

export const HeadingH2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
`;

export const HeadingH3 = styled.h3`
  font-size: 2.3rem;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: 0.75px;
`;

export const HeadingH4 = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

//Text
export const Text = styled.p`
  font-weight: 200;
  line-height: 2.5rem;
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
  font-size: 1.9rem;
  line-height: 2.5rem;
`;

export const TextSmall = styled(Text)`
  font-size: 1.4rem;
`;

// Links
export const LinkPrimary = styled(Link)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const LinkGrey = styled(Link)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.lightText};
`;

export const LinkWhite = styled(Link)`
  font-size: 2.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.whiteText};
`;
