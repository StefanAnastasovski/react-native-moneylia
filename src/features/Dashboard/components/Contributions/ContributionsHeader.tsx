import React from "react";
import { Text } from "native-base";
import { contributionsHeader } from "../../../../data/en";
import { getCurrentYear } from "../../../../utils/getCurrentYear";

const styles = {
  fontSize: 22,
  fontWeight: 500,
  color: "purpleBlue.2", //theme
  paddingTop: 6,
  paddingBottom: 4,
};

export const ContributionsHeader = () => {
  return <Text {...styles}>{`${contributionsHeader}${getCurrentYear()}`}</Text>;
};
