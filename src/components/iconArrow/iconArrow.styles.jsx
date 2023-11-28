import styled from "styled-components";

export const IconArrow = styled.div`
  cursor: pointer;
  scale: 1.6;
  transition: 0.1s all;
  position: absolute;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-30%);

  &:hover {
    scale: 1.8;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
