import React from "react";

import {
  Container,
  MagnifyingGlassButton,
  SearchInput,
  SearchText,
} from "./styles";
import theme from "../../config/theme";
import { MagnifyingGlass } from "../../assets/svg";
import { SearchBarProps } from "../../types/components";

export function SearchBar({
  isSearching,
  setIsSearching,
  searchInput,
  setSearchInput,
}: SearchBarProps) {
  const handleToogleInputSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <Container>
      {isSearching ? (
        <SearchInput
          placeholder="Search"
          placeholderTextColor={theme.colors.textColor[700]}
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          theme={theme}
        />
      ) : (
        <SearchText theme={theme}>Breeds</SearchText>
      )}

      <MagnifyingGlassButton
        testID="magnifyingGlassButton"
        onPress={handleToogleInputSearch}
      >
        <MagnifyingGlass
          width={28}
          height={28}
          fill={theme.colors.textColor[1000]}
        />
      </MagnifyingGlassButton>
    </Container>
  );
}
