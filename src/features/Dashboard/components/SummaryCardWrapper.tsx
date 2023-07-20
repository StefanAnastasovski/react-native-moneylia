import React from "react";
import { View } from "native-base";

type SummaryCardWrapperProps = {
  children: any;
};

const styles = {
  cardContainer: {
    p: 4,
  },
};

export const SummaryCardWrapper = ({ children }: SummaryCardWrapperProps) => {
  const { cardContainer } = styles;
  return <View {...cardContainer}>{children}</View>;
};
