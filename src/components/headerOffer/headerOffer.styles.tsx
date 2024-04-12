import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100vh;
  color: ${(props) => props.theme.colors.whiteText};
  position: relative;
  padding-left: 13rem;

  display: flex;
  align-items: center;
  justify-content: end;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13rem;
    width: 1px;
    background-color: ${(props) => props.theme.colors.white20};
  }

  &::before {
    content: "";
    background-image: url(${require(`../../img/header.jpg`)});
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(-1 * (100vw - 100%) / 2);
    right: calc(-1 * (100vw - 100%) / 2);
    z-index: -80;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8rem;
  width: 100%;
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
`;

export const SelectTabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
