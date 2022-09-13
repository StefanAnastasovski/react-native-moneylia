// imports: libraries + components
import React, { useEffect } from "react";
import { NativeBaseProvider, Center, View } from "native-base";

import SplashScreen from "react-native-splash-screen";
// imports
import LoginScreen from "./screens/LoginScreen";
import { moneyliaTheme } from "./styles/moneyliaTheme";
import { featureFlags } from "./data/featureFlags";
import DashboardScreen from "./screens/DashboardScreen";
import PagoPaServiceScreen from "./screens/PagoPaServiceScreen";
import PaymentDetailsScreen from "./screens/PaymentDetailsScreen";

const App = () => {
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
        {pagoPaServiceFlag && <PagoPaServiceScreen />}

        {dashboardFlag && <DashboardScreen />}

        {paymentDetailsFlag && <PaymentDetailsScreen />}

        {joinFreeFlag && (
          <Center>
            <LoginScreen />
          </Center>
        )}
      </NativeBaseProvider>
    </>
  );
};

// const styles = StyleSheet.create({});

export default App;
