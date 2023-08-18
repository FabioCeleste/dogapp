import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

import { AppRouter } from "../../types/routes";

export default function DetailsScreen() {
  const nav = useNavigation<AppRouter>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Navegar para favorites"
        onPress={() => nav.navigate("Favorites")}
      />
    </View>
  );
}
