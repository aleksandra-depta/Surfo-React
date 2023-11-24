import styled from "styled-components";

export const ContainerReview = styled.div`
  margin: 14rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media only screen and (max-width: 992px) {
    margin: 8rem 0;
    gap: 2rem;
  }
`;

export const SwiperReview = styled.div`
  width: 100%;
`;

export const FigureReview = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media only screen and (max-width: 576px) {
    gap: 2rem;
  }
`;

export const BlockquoteReview = styled.blockquote`
  font-size: 2.1rem;

  @media only screen and (max-width: 576px) {
    font-size: 10px;
  }
`;

export const ImageReview = styled.img`
  width: 100%;
  border-radius: 50px;
  object-fit: cover;

  @media only screen and (max-width: 992px) {
    border-radius: 10px;
  }
`;

export const TextContent = styled.div`
  margin-bottom: 6rem;
`;
