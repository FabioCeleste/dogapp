import styled from "styled-components/native";

export const Container = styled.View`
  margin: 32px 16px;
`;

export const BreedImgView = styled.TouchableOpacity`
  border: 5px solid ${({ theme }) => theme.colors.primaryColor[500]};
  width: 140px;
  height: 140px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;

  margin-right: 8px;
  margin-top: 14px;
`;

export const BreedImg = styled.Image`
  width: 135px;
  height: 135px;
`;

export const FavoriteBreedHeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BreedName = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const FavoriteButtonView = styled.TouchableOpacity`
  align-items: center;
`;
