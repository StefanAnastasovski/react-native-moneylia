/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// imports: libraries + components
import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Center } from "native-base";

import SplashScreen from "react-native-splash-screen";
// imports
import LoginScreen from "./screens/LoginScreen";
import { moneyliaTheme } from "./styles/moneyliaTheme";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider theme={moneyliaTheme}>
      <Center flex={1}>
        <LoginScreen />
      </Center>
    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({});

export default App;
