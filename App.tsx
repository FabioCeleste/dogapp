import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Spartan_400Regular,
  Spartan_600SemiBold,
  Spartan_700Bold,
} from "@expo-google-fonts/spartan";

import AppRoutes from "./src/routes";
import theme from "./src/config/theme";
import { StatusBar, View } from "react-native";
import { Header } from "./src/components/Header";

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_400Regular,
    Spartan_600SemiBold,
    Spartan_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <>
      <StatusBar backgroundColor={theme.colors.backgroundColor[100]} />
      <ThemeProvider theme={theme}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.backgroundColor[100],
          }}
        >
          <AppRoutes />
        </View>
      </ThemeProvider>
    </>
  );
}
