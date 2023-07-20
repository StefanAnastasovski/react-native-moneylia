import React from "react";
import { View, useTheme } from "native-base";
import { CardProps } from "../../@types/CardProps";

const shadowStyle = {
  shadowColor: "#000000",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.08,
  shadowRadius: 6,
};

export const Card = ({
  children,
  width = "100%",
  height = 124,
  backgroundColor,
  ...restStyle
}: CardProps) => {
  const {
    colors: { white },
  } = useTheme();

  const styles = {
    ...shadowStyle,
    borderRadius: 12,
    backgroundColor: backgroundColor ? backgroundColor : white,
    width,
    height,
    ...restStyle,
  };

  return <View {...styles}>{children}</View>;
};
