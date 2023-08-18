import React from "react";
import { BackButton, HomeText, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppRouter } from "../../types/routes";
import { LeftArrow } from "../../assets/svg";
import theme from "../../config/theme";

export function Header() {
  const nav = useNavigation<AppRouter>();

  const state = nav.getState();

  return (
    <Container>
      <BackButton
        onPress={() => {
          if (nav.canGoBack()) {
            nav.goBack();
          }
        }}
      >
        <LeftArrow width={28} height={28} fill={theme.colors.textColor[100]} />
      </BackButton>

      <HomeText>{state.routeNames[state.index]}</HomeText>
    </Container>
  );
}
