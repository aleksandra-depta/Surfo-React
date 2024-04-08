import styled from "styled-components";

export const ReviewSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-top: 10rem;

  &::before {
    content: "";
    background-image: url(${require(`../../img/bgReview.jpg`)});
    background-size: cover;
    background-position: center center;
    position: absolute;
    left: calc(-1 * (100vw - 100%) / 2);
    width: 100vw;
    height: 100vh;
    z-index: -80;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;

  @media only screen and (max-width: 992px) {
    padding-right: 16rem;
    padding-left: 0;
  }
`;

export const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10rem 0;
`;
