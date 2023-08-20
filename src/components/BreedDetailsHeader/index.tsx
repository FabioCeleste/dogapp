import React, { useEffect, useState } from "react";

import {
  AvatarImg,
  AvatarView,
  BreedName,
  Container,
  FavoriteButton,
  SubBreeds,
  ViewAvatarBorder,
} from "./styles";
import { Heart, HeartOutline } from "../../assets/svg";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeRoutesType } from "../../types/routes";
import theme from "../../config/theme";
import { getFavorites, saveFavorites } from "../../store/LocalStorage";

export function BreedDetailsHeader() {
  const [favoritesBreeds, setFavoritesBreeds] = useState<string[]>([]);
  const route = useRoute<RouteProp<HomeRoutesType, "Details">>();

  useEffect(() => {
    (async () => {
      let fav = await getFavorites();
      setFavoritesBreeds(fav);
    })();
  }, []);

  const handleClickFavorite = async () => {
    let fav = await getFavorites();

    if (fav.includes(route.params.breed)) {
      saveFavorites(favoritesBreeds.filter((b) => b !== route.params.breed));
    } else {
      fav.push(route.params.breed);
      saveFavorites(fav);
    }

    fav = await getFavorites();

    setFavoritesBreeds(fav);
  };

  return (
    <Container>
      <AvatarView>
        <ViewAvatarBorder theme={theme}>
          <AvatarImg source={{ uri: route.params.breedAvatar }} />
        </ViewAvatarBorder>

        <FavoriteButton
          theme={theme}
          onPress={handleClickFavorite}
          testID="favoriteButton"
        >
          {favoritesBreeds.includes(route.params.breed) ? (
            <Heart
              testID="heart"
              width={28}
              height={28}
              fill={theme.colors.error.light}
            />
          ) : (
            <HeartOutline
              width={28}
              height={28}
              fill={theme.colors.error.dark}
            />
          )}
        </FavoriteButton>
      </AvatarView>

      <BreedName theme={theme}>{route.params.breed}</BreedName>

      <SubBreeds testID="subBreeds" theme={theme}>
        {route.params.subBreed.map(
          (subBreedName, index) =>
            subBreedName +
            (index + 1 !== route.params.subBreed.length ? " - " : "")
        )}
      </SubBreeds>
    </Container>
  );
}
