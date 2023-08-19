import React from "react";

import {
  Container,
  MagnifyingGlassButton,
  SearchInput,
  SearchText,
} from "./styles";
import theme from "../../config/theme";
import { MagnifyingGlass } from "../../assets/svg";

type SearchBarProps = {
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
  searchInput: string;
  setSearchInput: (value: string) => void;
};

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
    <Container theme={theme}>
      {isSearching ? (
        <SearchInput
          placeholder="Search"
          placeholderTextColor={theme.colors.textColor[700]}
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
        />
      ) : (
        <SearchText>Breeds</SearchText>
      )}

      <MagnifyingGlassButton onPress={handleToogleInputSearch}>
        <MagnifyingGlass
          width={28}
          height={28}
          fill={theme.colors.textColor[1000]}
        />
      </MagnifyingGlassButton>
    </Container>
  );
}
