import React from "react";

import { View } from "native-base";
import { AppBar } from "../../components/AppBar/AppBar";

const styles = {
  joinContainer: {
    // px: 6,
  },
};
export const Dashboard = () => {
  const { joinContainer } = styles;
  return (
    <View {...joinContainer}>
      <AppBar />
    </View>
  );
};
