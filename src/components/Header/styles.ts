import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 26px;

  background-color: ${({ theme }) => theme.colors.backgroundColor[200]};
  position: absolute;
  left: 16px;

  align-items: center;
  justify-content: center;
`;

export const HomeText = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
