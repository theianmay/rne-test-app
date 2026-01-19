import "@testing-library/jest-native/extend-expect";

// Mock react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock expo-router
jest.mock("expo-router", () => ({
  Link: ({ children }) => children,
  Stack: {
    Screen: () => null,
  },
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
}));

// Mock SafeAreaContext
jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: ({ children }) => children,
  SafeAreaProvider: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

// Mock vector icons
jest.mock("@react-native-vector-icons/material-icons", () => "MaterialIcons");
jest.mock("@react-native-vector-icons/fontawesome", () => "FontAwesome");
jest.mock("@react-native-vector-icons/ionicons", () => "Ionicons");
jest.mock("@react-native-vector-icons/feather", () => "Feather");

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// Global test timeout
jest.setTimeout(10000);
