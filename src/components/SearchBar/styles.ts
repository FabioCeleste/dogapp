import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 32px;
  align-self: flex-end;

  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

export const SearchText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor[100]};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;

  align-self: center;
  flex: 1;

  height: 50px;
`;

export const MagnifyingGlassButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const SearchInput = styled.TextInput`
  padding: 8px 16px;
  height: 50px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primaryColor[500]};

  width: 80%;

  color: ${({ theme }) => theme.colors.textColor[100]};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-left: 16px;
`;
