import React from "react";
import { SafeAreaView } from "react-native";
import { View, useTheme, StatusBar } from "native-base";
import { AppBar } from "../../components/AppBar/AppBar";
import { PagoPaServiceCard } from "./components/PagoPaServiceCard/PagoPaServiceCard";
import { PagoPaTextSection } from "./components/PagoPaTextSection/PagoPaTextSection";
import { PagoPaBodyWrapper } from "./components/PagoPaBodyWrapper";

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

export const PagoPaService = () => {
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
          <AppBar backgroundColor="lavender.1" />
          <PagoPaServiceCard />
          <PagoPaBodyWrapper>
            <PagoPaTextSection />
          </PagoPaBodyWrapper>
        </View>
      </SafeAreaView>
    </>
  );
};
