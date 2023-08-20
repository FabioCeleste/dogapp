import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";

export type HomeRoutesType = {
  List: undefined;
  Details: { breed: string; subBreed: string[]; breedAvatar: string };
};

type AppRouterProps = {
  Home: NavigatorScreenParams<HomeRoutesType>;
  Favorites: undefined;
};

export type AppRouter = BottomTabNavigationProp<AppRouterProps>;
