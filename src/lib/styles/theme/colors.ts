import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  gray: {
    50: "#F7FAFC",
    100: "#E2E8F0",
    200: "#CBD5E0",
    300: "#A0AEC0",
    400: "#8188AC",
    500: "#718096",
    600: "#4A5568",
    700: "#1f2733",
    800: "#1A202C",
    900: "#171923",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
