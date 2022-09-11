import React from "react";
import { View, Text } from "native-base";
import { UserIcon } from "../../../../assets/icons/UserIcon";
import { dashboardCardTitle } from "../../../../data/en";

const styles = {
  headerContainer: {
    flexDir: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: 600,
    paddingLeft: "10px",
    color: "purpleBlue.2", //theme
  },
};

export const UserSummaryHeader = () => {
  const { headerContainer, headerText } = styles;

  return (
    <View {...headerContainer}>
      <UserIcon />
      <Text {...headerText}>{dashboardCardTitle}</Text>
    </View>
  );
};
