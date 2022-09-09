import { extendTheme } from "native-base";

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
    },
    errors: {
      1: "#F83E5A", // red
    },
    background: {
      1: "#E5E5E5", // white
      2: "#F8F4FF", //violet
    },
  },
});
