import React from "react";
import { SafeAreaView } from "react-native";
import { View, useTheme } from "native-base";
import { AppBar } from "../../components/AppBar/AppBar";
import { WelcomeCard } from "./components/WelcomeCard/WelcomeCard";
import { SummaryCardWrapper } from "./components/SummaryCardWrapper";
import { UserSummary } from "./components/UserSummary/UserSummary";
import { ContributionsHeader } from "./components/Contributions/ContributionsHeader";
import { ContributionsBody } from "./components/Contributions/ContributionsBody";
import CustomStatusBar from "../../components/CustomStatusBar";

const styles = {
  container: {
    flex: 1,
    bg: "background.2",
    marginTop: -2, // try to remove it - top white space
  },
  rootContainer: {
    flex: 1,
  },
};

export const Dashboard = () => {
  const {
    colors: { purpleBlue, background },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    statusBar: {
      backgroundColor: purpleBlue[1],
      barStyle: "light-content",
    },
    safeAreaViewBg: {
      backgroundColor: background[2],
    },
  };

  const { rootContainer, container, statusBar, safeAreaViewBg } = extendedStyles;

  return (
    <>
      <CustomStatusBar {...statusBar} />
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
