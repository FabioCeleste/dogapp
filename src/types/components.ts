export type SearchBarProps = {
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
  searchInput: string;
  setSearchInput: (value: string) => void;
};

export type BreedHomeItemProps = {
  breed: string;
  subBreed: string[];
  searchInput: string;
};

export type ListBreedImagesDetailsProps = {
  imgsUrls: string[];
};
