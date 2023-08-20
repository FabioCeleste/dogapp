import React, { useEffect, useState } from "react";

import { Container, Img, ImgView } from "./styles";
import { ListBreedImagesDetailsProps } from "../../types/components";
import { FlatList } from "react-native";
import { BreedDetailsHeader } from "../BreedDetailsHeader";
import theme from "../../config/theme";

export function ListBreedImagesDetails({
  imgsUrls,
}: ListBreedImagesDetailsProps) {
  const RenderImg = ({ imgUrl }: any) => {
    return (
      <ImgView theme={theme}>
        <Img source={{ uri: imgUrl }} />
      </ImgView>
    );
  };

  return (
    <Container>
      <FlatList
        testID="flatList"
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        key={2}
        data={imgsUrls}
        keyExtractor={(item) => item}
        renderItem={(item) => <RenderImg imgUrl={item.item} />}
        ListHeaderComponent={<BreedDetailsHeader />}
      />
    </Container>
  );
}
