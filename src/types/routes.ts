import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";

type HomeRoutes = {
  List: undefined;
  Details: undefined;
};

type AppRouterProps = {
  Home: NavigatorScreenParams<HomeRoutes>;
  Favorites: undefined;
};

export type AppRouter = BottomTabNavigationProp<AppRouterProps>;
