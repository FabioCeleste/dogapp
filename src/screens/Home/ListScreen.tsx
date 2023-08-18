import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

import { AppRouter } from "src/types/routes";

export default function ListScreen() {
  const nav = useNavigation<AppRouter>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Navegar"
        onPress={() =>
          nav.navigate("Home", {
            screen: "Details",
          })
        }
      />
    </View>
  );
}
