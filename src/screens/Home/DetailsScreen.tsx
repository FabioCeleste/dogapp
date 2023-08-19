import React from "react";
import { View } from "react-native";

import theme from "../../config/theme";
import { Header } from "../../components/Header";

export default function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor[100],
      }}
    >
      <Header />
    </View>
  );
}
