import React, { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

import theme from "../../config/theme";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { BreedHomeItem } from "../../components/BreedHomeItem";
import { listAllBreeds } from "../../services/listAllBreeds";
import { listAllBreedsRes } from "../../types/services";

export default function ListScreen() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [breedsList, setBreedList] = useState<listAllBreedsRes | null>(null);

  useEffect(() => {
    (async () => {
      const breedsList = await listAllBreeds();

      setBreedList(breedsList);
    })();
  }, []);

  if (!breedsList) return <></>;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor[100],
      }}
    >
      <Header />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />

      <FlatList
        style={{ marginTop: 32 }}
        data={Object.keys(breedsList.message)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return item.includes(searchInput) ? (
            <BreedHomeItem
              breed={item}
              subBreed={breedsList.message[item] || []}
              searchInput={searchInput}
            />
          ) : (
            <></>
          );
        }}
      />
    </View>
  );
}
