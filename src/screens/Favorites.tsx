import React from "react";
import { View } from "react-native";

import theme from "../config/theme";

export default function FavoritesScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor[100],
      }}
    ></View>
  );
}
