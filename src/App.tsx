// imports: libraries + components
import React, { useEffect } from "react";
import { NativeBaseProvider, Center, View } from "native-base";

import SplashScreen from "react-native-splash-screen";
// imports
import LoginScreen from "./screens/LoginScreen";
import { moneyliaTheme } from "./styles/moneyliaTheme";
import CustomStatusBar from "./components/CustomStatusBar";
import { featureFlags } from "./data/featureFlags";
import { Dashboard } from "./features/Dashboard/Dashboard";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // using flags to enable/disable screens => remove flags when navigation will be added.
  const { isJoinFreeEnabled: joinFreeFlag, isDashboardEnabled: dashboardFlag } =
    featureFlags;

  return (
    <>
      <NativeBaseProvider theme={moneyliaTheme}>
        {dashboardFlag && (
          <>
            <Dashboard />
          </>
        )}

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
