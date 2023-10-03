import styled from "styled-components";

export const Nav = styled.div`
  height: 5rem;
  width: 100%;
  padding: 5rem 13rem 3.5rem 13rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;

  /* @media only screen and (max-width: $bp-1260) {
    padding: 5rem 7rem 3.5rem 7rem;
  }
  @media only screen and (max-width: $bp-565) {
    padding: 5rem 1.2rem 3.5rem 1.2rem;
  } */
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  /* @media only screen and (max-width: $bp-565) {
    gap: 2rem;
  } */
`;

export const ImageLogo = styled.img`
  height: 2.2rem;
`;

export const ImageUser = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;
