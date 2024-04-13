import styled from "styled-components";

export const ReviewSection = styled.div`
  position: relative;
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
  width: 44%;
  margin: 0 10rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: 1200px) {
    margin: 0;
    width: 60%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
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
  height: max-content;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
