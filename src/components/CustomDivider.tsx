import { useTheme } from "native-base";
import React from "react";
import { View } from "react-native";

const styles = {
  borderBottomWidth: 1,
};

export const CustomDivider = () => {
  const {
    colors: { neutral },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    borderBottomColor: neutral[5],
  };
  return <View {...extendedStyles} />;
};
