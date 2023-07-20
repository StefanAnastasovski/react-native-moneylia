import React from "react";
import { SafeAreaView } from "react-native";
import { View, useTheme, StatusBar } from "native-base";
import { AppBar } from "../../components/AppBar/AppBar";
import { WelcomeCard } from "./components/WelcomeCard/WelcomeCard";
import { SummaryCardWrapper } from "./components/SummaryCardWrapper";
import { UserSummary } from "./components/UserSummary/UserSummary";
import { ContributionsHeader } from "./components/Contributions/ContributionsHeader";
import { ContributionsBody } from "./components/Contributions/ContributionsBody";

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

export const Dashboard = () => {
  const {
    colors: { purpleBlue, background },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    statusBar: {
      flex: 0,
      backgroundColor: purpleBlue[1],
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
          <AppBar />
          <WelcomeCard />
          <SummaryCardWrapper>
            <UserSummary />
            <ContributionsHeader />
            <ContributionsBody />
          </SummaryCardWrapper>
        </View>
      </SafeAreaView>
    </>
  );
};
