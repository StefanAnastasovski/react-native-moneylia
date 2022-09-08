import { useTheme } from "native-base";
import React from "react";
import { View, StatusBar } from "react-native";
import { StatusBarProps } from "../@types/StatusBarProps";
import styles from "../styles/StatusBar/StatusBarStyle";

const CustomStatusBar = ({
  backgroundColor,
  barStyle,
  ...props
}: StatusBarProps) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
};
export default CustomStatusBar;
