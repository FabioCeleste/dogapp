import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import theme from "../config/theme";
import { Header } from "../components/Header";
import { FavoriteItem } from "../components/FavoriteItem";
import { getFavorites } from "../store/LocalStorage";

export default function FavoritesScreen() {
  const [favoritesBreeds, setFavoritesBreeds] = useState<string[]>();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      let fav = await getFavorites();

      setFavoritesBreeds(fav);
    })();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    let fav = await getFavorites();

    setFavoritesBreeds(fav);
    setIsRefreshing(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor[100],
      }}
    >
      <Header />

      <FlatList
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        data={favoritesBreeds}
        keyExtractor={(item) => item}
        renderItem={(item) => <FavoriteItem breedName={item.item} />}
      />
    </View>
  );
}
