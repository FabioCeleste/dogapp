import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding-left: 16px;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const BreedAvatar = styled.Image`
  width: 94px;
  height: 94px;
  border-radius: 47px;
`;

export const BreedInfoView = styled.View`
  margin-left: 16px;
  max-width: 70%;
`;

export const BreedName = styled.Text`
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const SubBreedName = styled.Text`
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
