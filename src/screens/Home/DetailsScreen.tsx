import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import theme from "../../config/theme";
import { Header } from "../../components/Header";
import { BreedDetailsHeader } from "../../components/BreedDetailsHeader";
import { getAllImageByBreed } from "../../services/getAllImageByBreed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeRoutesType } from "../../types/routes";
import { ListBreedImagesDetails } from "../../components/ListBreedImagesDetails";

export default function DetailsScreen() {
  const [allBreedImages, setAllBreedImages] = useState<string[]>([]);

  const route = useRoute<RouteProp<HomeRoutesType, "Details">>();

  useEffect(() => {
    (async () => {
      const breedImages = await getAllImageByBreed(route.params.breed);

      setAllBreedImages(breedImages.message);
    })();
  }, []);

  const VirtualizedList = ({ children }: any) => {
    return (
      <FlatList
        style={{
          flex: 1,
          backgroundColor: theme.colors.backgroundColor[100],
        }}
        data={[]}
        keyExtractor={() => "key"}
        renderItem={null}
        ListHeaderComponent={<>{children}</>}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor[100],
      }}
    >
      <Header />

      <ListBreedImagesDetails imgsUrls={allBreedImages} />
    </View>
  );
}
