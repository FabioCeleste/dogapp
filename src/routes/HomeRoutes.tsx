import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailsScreen from "../screens/Home/DetailsScreen";
import ListScreen from "..//screens/Home/ListScreen";

const Stack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
