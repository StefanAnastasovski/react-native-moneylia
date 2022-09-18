// imports: libraries + components
import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "react-native-splash-screen";
// imports
import { moneyliaTheme } from "./styles/moneyliaTheme";
import { MainNavigation } from "./navigation/MainNavigation";

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NativeBaseProvider theme={moneyliaTheme}>
        <NavigationContainer onReady={() => SplashScreen.hide()}>
          <MainNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

// const styles = StyleSheet.create({});
