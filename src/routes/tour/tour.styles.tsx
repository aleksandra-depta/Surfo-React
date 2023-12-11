import styled from "styled-components";

export const CardSection = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: max-content;

  @media only screen and (max-width: 992px) {
    height: max-content;
    margin-bottom: 14rem;
  }
`;

export const Section = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 992px) {
    height: max-content;
    margin-bottom: 14rem;
  }
`;

export const ReviewSection = styled.div`
  height: 100vh;
  position: relative;
`;

export const IconArrow = styled.div`
  cursor: pointer;
  scale: 1.6;
  transition: 0.1s all;
  position: absolute;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    scale: 1.8;
  }
`;

export const IconArrowHeader = styled(IconArrow)`
  bottom: 16vh;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
