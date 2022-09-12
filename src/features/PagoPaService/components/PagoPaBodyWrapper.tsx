import React from "react";
import { View } from "native-base";

type PagoPaBodyWrapperProps = {
  children: any;
};

const styles = {
  pagoPaContainer: {
    px: 4,
  },
};

export const PagoPaBodyWrapper = ({ children }: PagoPaBodyWrapperProps) => {
  const { pagoPaContainer } = styles;
  return <View {...pagoPaContainer}>{children}</View>;
};
