import React from "react";
import { View, Text } from "native-base";
import { CustomDivider } from "../../../components/CustomDivider";

const styles = {
  container: {
    py: 4,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 600,
    color: "purpleBlue.3",
    pb: 1,
  },
  textStyle: {
    fontSize: 16,
    color: "neutral.1",
    lineHeight: 19,
  },
};

export const PaymentDetailsRow = ({
  useDevider = true,
  title,
  text,
}: {
  useDevider?: boolean;
  title: string;
  text: string;
}) => {
  const { container, titleStyle, textStyle } = styles;
  return (
    <>
      <View {...container}>
        <Text {...titleStyle}>{title}</Text>
        <Text {...textStyle}>{text}</Text>
      </View>
      {useDevider && <CustomDivider />}
    </>
  );
};
