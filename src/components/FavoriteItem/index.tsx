import React, { useEffect, useState } from "react";

import {
  BreedImg,
  BreedImgView,
  BreedName,
  Container,
  FavoriteBreedHeaderView,
  FavoriteButtonView,
} from "./styles";
import { Heart, HeartOutline } from "../../assets/svg";
import { FlatList } from "react-native";

import { FavoriteItemProps } from "../../types/components";
import { getFavorites, saveFavorites } from "../../store/LocalStorage";
import theme from "../../config/theme";
import { useNavigation } from "@react-navigation/native";
import { AppRouter } from "../../types/routes";
import { listAllSubBreed } from "../../services/listAllSubBreed";
import { getRandomImageByBreedWithCount } from "../../services/getRandomImageByBreed";

export function FavoriteItem({ breedName }: FavoriteItemProps) {
  const [favoritesBreeds, setFavoritesBreeds] = useState<string[]>([]);
  const [imgs, setImgs] = useState<string[]>([]);

  const nav = useNavigation<AppRouter>();

  useEffect(() => {
    (async () => {
      const fav = await getFavorites();
      const imgs = await getRandomImageByBreedWithCount(breedName, 5);

      setFavoritesBreeds(fav);
      setImgs(imgs.message);
    })();
  }, []);

  const RenderBreedImg = ({ imgUri }: any) => {
    const handleClickBreedImg = async () => {
      const subBreeds = await listAllSubBreed(breedName);

      nav.navigate("Home", {
        screen: "Details",
        params: {
          breed: breedName,
          subBreed: subBreeds.message,
          breedAvatar: imgUri as string,
        },
      });
    };

    return (
      <BreedImgView
        testID="breedImgView"
        theme={theme}
        onPress={handleClickBreedImg}
      >
        <BreedImg
          source={{
            uri: imgUri,
          }}
        />
      </BreedImgView>
    );
  };

  const handleClickFavorite = async () => {
    let fav = await getFavorites();

    if (fav.includes(breedName)) {
      saveFavorites(fav.filter((b) => b !== breedName));
    } else {
      fav.push(breedName);
      saveFavorites(fav);
    }

    fav = await getFavorites();

    setFavoritesBreeds(fav);
  };

  return (
    <Container>
      <FavoriteBreedHeaderView>
        <BreedName theme={theme}>{breedName}</BreedName>

        <FavoriteButtonView
          testID="favoriteButtonView"
          onPress={handleClickFavorite}
        >
          {favoritesBreeds.includes(breedName) ? (
            <Heart
              testID="heart"
              width={24}
              height={24}
              fill={theme.colors.error.light}
            />
          ) : (
            <HeartOutline
              testID="heartOutline"
              width={24}
              height={24}
              fill={theme.colors.error.light}
            />
          )}
        </FavoriteButtonView>
      </FavoriteBreedHeaderView>

      <FlatList
        testID="flatList"
        data={imgs}
        horizontal={true}
        keyExtractor={(item) => item}
        renderItem={(item) => <RenderBreedImg imgUri={item.item} />}
      />
    </Container>
  );
}
