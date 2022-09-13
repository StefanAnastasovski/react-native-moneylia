import React from "react";
import { SafeAreaView } from "react-native";
import { View, useTheme, StatusBar } from "native-base";
import { NavigatorBackBar } from "../../components/NavigatorBackBar/NavigatorBackBar";

const styles = {
  container: {
    flex: 1,
    bg: "background.2",
  },
  rootContainer: {
    flex: 1,
  },
  barStyle: "light-content",
};

export const PaymentDetails = () => {
  const {
    colors,
    colors: { lavender, background },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    statusBar: {
      flex: 0,
      backgroundColor: lavender[1],
    },
    safeAreaViewBg: {
      backgroundColor: background[2],
    },
  };
  const { rootContainer, container, statusBar, safeAreaViewBg, barStyle } =
    extendedStyles;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={statusBar} />
      <SafeAreaView style={[rootContainer, safeAreaViewBg]}>
        <View {...container}>
          <NavigatorBackBar backgroundColor="lavender.1" />
        </View>
      </SafeAreaView>
    </>
  );
};
