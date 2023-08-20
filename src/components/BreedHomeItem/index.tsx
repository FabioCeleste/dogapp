import React, { useEffect, useState } from "react";
import {
  BreedAvatar,
  BreedInfoView,
  BreedName,
  Container,
  SubBreedName,
} from "./styles";
import { getRandomImageByBreed } from "../../services/getRandomImageByBreed";
import { BreedHomeItemProps } from "../../types/components";
import theme from "../../config/theme";
import { useNavigation } from "@react-navigation/native";
import { AppRouter } from "../../types/routes";

export function BreedHomeItem({ breed, subBreed }: BreedHomeItemProps) {
  const [breedAvatarUrl, setBreedAvatarUrl] = useState<string | null>(null);
  const nav = useNavigation<AppRouter>();

  useEffect(() => {
    (async () => {
      const breedRandomImage = await getRandomImageByBreed(breed);

      setBreedAvatarUrl(breedRandomImage.message);
    })();
  }, []);

  const handleClickBreed = () => {
    nav.navigate("Home", {
      screen: "Details",
      params: { breed, subBreed, breedAvatar: breedAvatarUrl as string },
    });
  };

  return (
    <Container testID="container" onPress={handleClickBreed}>
      {breedAvatarUrl ? (
        <BreedAvatar theme={theme} source={{ uri: breedAvatarUrl }} />
      ) : (
        <></>
      )}

      <BreedInfoView>
        <BreedName theme={theme}>{breed}</BreedName>

        {subBreed.length > 0 && (
          <SubBreedName testID="subBreedName" theme={theme} numberOfLines={2}>
            {subBreed.map(
              (subBreedName, index) =>
                subBreedName + (index + 1 !== subBreed.length ? " - " : "")
            )}
          </SubBreedName>
        )}
      </BreedInfoView>
    </Container>
  );
}
