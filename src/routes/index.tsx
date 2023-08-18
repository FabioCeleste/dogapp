import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { HomeRoutes } from "./HomeRoutes";
import FavoritesScreen from "../screens/Favorites";
import {
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Heart, Logo } from "../assets/svg";
import theme from "..//config/theme";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 5,
        borderBottomWidth: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderColor: theme.colors.backgroundColor[200],
        backgroundColor: theme.colors.backgroundColor[100],
      }}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const renderIcon = () => {
          switch (route.name) {
            case "Home":
              return (
                <Logo
                  width={24}
                  height={24}
                  fill={
                    isFocused
                      ? theme.colors.primaryColor[500]
                      : theme.colors.textColor[100]
                  }
                />
              );
            case "Favorites":
              return (
                <Heart
                  width={24}
                  height={24}
                  fill={
                    isFocused
                      ? theme.colors.primaryColor[500]
                      : theme.colors.textColor[100]
                  }
                />
              );
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: theme.colors.backgroundColor[100],
              paddingVertical: 16,
            }}
            key={route.name}
          >
            {renderIcon()}
            <Text
              style={{
                color: isFocused
                  ? theme.colors.primaryColor[500]
                  : theme.colors.textColor[100],
                textAlign: "center",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
