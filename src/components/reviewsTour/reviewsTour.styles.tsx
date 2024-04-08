import styled from "styled-components";

export const ReviewSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 992px) {
    height: max-content;
  }
`;

export const ReviewSectionTour = styled(ReviewSection)`
  &::before {
    content: "";
    background-image: none;
  }
`;

export const SliderTour = styled.div`
  position: relative;
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 16rem;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 8rem;
  }
`;
