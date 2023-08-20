import styled from "styled-components/native";

export const Container = styled.View`
  margin: 16px;
`;

export const ImgView = styled.View`
  width: 48%;

  align-items: center;
  justify-content: center;

  border: 4px solid ${({ theme }) => theme.colors.primaryColor[500]};

  margin-bottom: 16px;
  border-radius: 8px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 160px;
`;
