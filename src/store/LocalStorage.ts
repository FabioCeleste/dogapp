import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFavorites = async (value: string[]) => {
  try {
    await AsyncStorage.setItem("favoritesBreeds", value.join("-"));
  } catch (e) {
    console.log(e);
  }
};

export const getFavorites = async () => {
  try {
    const value = await AsyncStorage.getItem("favoritesBreeds");
    if (value !== null) {
      return value.split("-");
    }

    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
