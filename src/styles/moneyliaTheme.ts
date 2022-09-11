import { extendTheme } from "native-base";

const fonts = {
  Roboto: {
    100: {
      normal: "Roboto-Thin",
    },
    200: {
      normal: "Roboto-Thin",
    },
    300: {
      normal: "Roboto-Light",
    },
    400: {
      normal: "Roboto-Regular",
    },
    500: {
      normal: "Roboto-Medium",
    },
    600: {
      normal: "Roboto-Bold",
    },
    700: {
      normal: "Roboto-Bold",
    },
    800: {
      normal: "Roboto-Bold",
    },
    900: {
      normal: "Roboto-Bold",
    },
  },
  WorkSans: {
    100: { normal: "WorkSans-Thin", italic: "WorkSans-ThinItalic" },
    200: { normal: "WorkSans-ExtraLight", italic: "WorkSans-ExtraLightItalic" },
    300: { normal: "WorkSans-Light", italic: "WorkSans-LightItalic" },
    400: { normal: "WorkSans-Regular", italic: "WorkSans-RegularItalic" },
    500: { normal: "WorkSans-Medium", italic: "WorkSans-MediumItalic" },
    600: { normal: "WorkSans-SemiBold", italic: "WorkSans-SemiBoldItalic" },
    700: { normal: "WorkSans-Bold", italic: "WorkSans-BoldItalic" },
    800: { normal: "WorkSans-ExtraBold", italic: "WorkSans-ExtraBoldItalic" },
    900: { normal: "WorkSans-Black", italic: "WorkSans-BlackItalic" },
  },
};

export const moneyliaTheme = extendTheme({
  colors: {
    // Add new color
    purpleBlue: {
      1: "#7476ED",
      2: "#3A3B7B",
      3: "#312E43",
    },
    neutral: {
      //light grey
      1: "#6F6D7B",
      2: "#83828E",
      3: "#A5A5AA",
      4: "#9897A1",
    },
    errors: {
      1: "#F83E5A", // red
    },
    rose: {
      1: "#BF7EE6",
    },
    background: {
      1: "#E5E5E5", // white
      2: "#F8F4FF", //violet
    },
  },
  fontConfig: fonts,
  fonts: {
    body: "WorkSans",
    heading: "WorkSans",
    mono: "WorkSans",
  },
});
