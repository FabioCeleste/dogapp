import React, { useState } from "react";
import { View } from "react-native";

import theme from "../../config/theme";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";

export default function ListScreen() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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
    </View>
  );
}
