import styled from "styled-components";

export const ReviewSection = styled.div`
  position: relative;
  height: max-content;
  width: 100%;
  margin-top: 10rem;
  padding-bottom: 10rem;

  &::before {
    content: "";
    background-image: url(${require(`../../img/bgReview.jpg`)});
    background-size: cover;
    background-position: center center;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    top: 0;
    bottom: 0;
    z-index: -80;
  }
`;

export const Slider = styled.div`
  position: relative;
  padding-bottom: 2rem;
  margin: 0 10rem;

  @media only screen and (max-width: 1200px) {
    margin: 0;
    margin-right: 0rem;
    padding-right: 20rem;
  }
`;

export const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10rem 0;
`;
