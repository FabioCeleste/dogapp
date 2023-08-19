import { render, fireEvent } from "@testing-library/react-native";

import { SearchBar } from "../index";
import React from "react";

describe("Search Bar", () => {
  const mockSetIsSearching = jest.fn();
  const mockSetSearchInput = jest.fn();

  it("should render the search bar without showing the input", () => {
    const { getByText } = render(
      <SearchBar
        isSearching={false}
        searchInput=""
        setIsSearching={mockSetIsSearching}
        setSearchInput={mockSetSearchInput}
      />
    );

    expect(getByText("Breeds")).toBeTruthy();
  });
  it("should render the search bar showing the input", () => {
    const { queryByText } = render(
      <SearchBar
        isSearching={true}
        searchInput=""
        setIsSearching={mockSetIsSearching}
        setSearchInput={mockSetSearchInput}
      />
    );

    const breedsText = queryByText("Breeds");

    expect(breedsText).toBeNull();
  });

  it("search for a text", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        isSearching={true}
        searchInput=""
        setIsSearching={mockSetIsSearching}
        setSearchInput={mockSetSearchInput}
      />
    );

    const input = getByPlaceholderText("Search");

    fireEvent.changeText(input, "bull terrier");

    expect(mockSetSearchInput).toHaveBeenLastCalledWith("bull terrier");
  });

  it("should call the input change state when click in the magnifying glass icon", () => {
    const { getByTestId } = render(
      <SearchBar
        isSearching={true}
        searchInput=""
        setIsSearching={mockSetIsSearching}
        setSearchInput={mockSetSearchInput}
      />
    );

    const magnifyingGlassButton = getByTestId("magnifyingGlassButton");

    fireEvent.press(magnifyingGlassButton);

    expect(mockSetIsSearching).toBeCalledTimes(1);
  });
});
