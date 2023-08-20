// include this line for mocking react-native-gesture-handler
import "react-native-gesture-handler/jestSetup";

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

export const mockGoBack = jest.fn();
export const mockNavigate = jest.fn();
export const setItemMock = jest.fn();

const routes = ["Home"];

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => {
      return {
        getState: () => ({ routeNames: ["Home"], index: 0 }),
        canGoBack: () => (routes.length > 0 ? true : false),
        navigate: mockNavigate,
        goBack: () => {
          routes.pop();
          mockGoBack();
        },
      };
    },

    useRoute: () => {
      return {
        params: {
          breed: "retriever",
          subBreed: ["chesapeake", "curly", "flatcoated", "golden"],
          breedAvatar:
            "https://images.dog.ceo/breeds/retriever-golden/n02099601_2691.jpg",
        },
      };
    },
  };
});

jest.mock("@react-native-async-storage/async-storage", () => {
  let favBreeds = "golden-chesapeake-curly-flatcoated-retriever";

  return {
    setItem: () => {
      if (favBreeds.includes("-retriever")) {
        favBreeds = "golden-chesapeake-curly-flatcoated";
      } else {
        favBreeds += "-retriever";
      }
    },
    getItem: () => Promise.resolve(favBreeds),
  };
});
