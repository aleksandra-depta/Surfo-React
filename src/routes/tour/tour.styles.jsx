import styled from "styled-components";

export const CardSection = styled.div`
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 992px) {
    height: max-content;
    margin-bottom: 14rem;
  }
`;

export const Section = styled.div`
  height: 100vh;
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

export const DescriptionContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  border-radius: 80px;

  @media only screen and (max-width: 768px) {
    border-radius: 50px;
  }
`;

export const DescriptionContent = styled.div`
  padding: 6rem 10rem 0 10rem;

  @media only screen and (max-width: 768px) {
    padding: 6rem 4rem 2rem 4rem;
  }
`;

export const DescriptionRow = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const MapContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 30px solid ${(props) => props.theme.colors.whiteText};
  background-color: ${(props) => props.theme.colors.whiteText};
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.greyLightShades};
  border-radius: 80px;

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 50px;
    border: 15px solid ${(props) => props.theme.colors.whiteText};
  }
`;

export const MapDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  border: 1px solid ${(props) => props.theme.colors.greyLightShades};
  border-right: none;
  border-radius: 50px 0 0 50px;
  padding: 2rem 4rem 0 4rem;

  @media only screen and (max-width: 992px) {
    border-radius: 0 0 50px 50px;
    border-right: 1px solid ${(props) => props.theme.colors.greyLightShades};
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 0 0 30px 30px;
    padding: 2rem 0;
  }
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 992px) {
    gap: 1rem;
    flex-wrap: wrap;
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
