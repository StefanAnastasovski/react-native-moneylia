import React from "react";

import { View } from "native-base";
import { AppBar } from "../../components/AppBar/AppBar";
import { WelcomeCard } from "./components/WelcomeCard/WelcomeCard";
import { SummaryCardWrapper } from "./components/SummaryCardWrapper";
import { UserSummary } from "./components/UserSummary/UserSummary";

export const Dashboard = () => {
  return (
    <View flex={1} bg="background.2">
      <AppBar />
      <WelcomeCard />
      <SummaryCardWrapper>
        <UserSummary />
      </SummaryCardWrapper>
    </View>
  );
};
