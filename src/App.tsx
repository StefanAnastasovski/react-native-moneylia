// imports: libraries + components
import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";

import SplashScreen from "react-native-splash-screen";
// imports
import { moneyliaTheme } from "./styles/moneyliaTheme";
import { featureFlags } from "./data/featureFlags";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./navigation/MainNavigation";
// import { BottomTabNavigation } from "./navigation/BottomTabNavigation";

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // using flags to enable/disable screens => remove flags when navigation will be added.
  const {
    isJoinFreeEnabled: joinFreeFlag,
    isDashboardEnabled: dashboardFlag,
    isPagoPaServiceEnabled: pagoPaServiceFlag,
    isPaymentDetailsEnabled: paymentDetailsFlag,
  } = featureFlags;

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
