import React from "react";
import { BackButton, HomeText, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppRouter } from "../../types/routes";
import { LeftArrow } from "../../assets/svg";
import theme from "../../config/theme";

export function Header() {
  const nav = useNavigation<AppRouter>();

  const state = nav.getState();

  const handleClickBackButton = () => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  };

  return (
    <Container theme={theme}>
      <BackButton
        theme={theme}
        onPress={() => handleClickBackButton()}
        testID="backButton"
      >
        <LeftArrow width={28} height={28} fill={theme.colors.textColor[100]} />
      </BackButton>

      <HomeText theme={theme}>{state.routeNames[state.index]}</HomeText>
    </Container>
  );
}
