import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 820px;
  padding-right: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.colorLightShades};
  }
`;

export const ItemContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageItem = styled.img`
  max-width: 25rem;
  max-height: auto;
  margin: 20px;
`;
