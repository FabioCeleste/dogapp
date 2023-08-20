import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const AvatarView = styled.View``;

export const AvatarImg = styled.Image`
  width: 150px;
  height: 150px;

  border-radius: 75px;
`;

export const ViewAvatarBorder = styled.View`
  border: 8px solid ${({ theme }) => theme.colors.primaryColor[500]};

  width: 160px;
  height: 160px;

  border-radius: 80px;

  align-items: center;
  justify-content: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primaryColor[500]};
  border-radius: 25px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0px;
  bottom: 0px;
`;

export const BreedName = styled.Text`
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-top: 24px;
`;

export const SubBreeds = styled.Text`
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 8px;

  text-align: center;
  line-height: 38px;
`;
