import React from "react";
import { View, useTheme, Text, Image } from "native-base";
import { PagoPaFrame } from "../../../assets/allImages";
import { CustomDivider } from "../../../components/CustomDivider";

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    py: 6,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 600,
    color: "purpleBlue.2",
  },
  imageStyle: {
    width: "40px",
    height: "40px",
  },
};

export const PaymentDetailsHeader = () => {
  const extendedStyles = {
    ...styles,
    titleColor: {},
  };
  const { container, titleStyle, imageStyle } = extendedStyles;

  return (
    <>
      <View {...container}>
        <Text {...titleStyle}>Payment notice</Text>
        <Image
          source={PagoPaFrame}
          alt="PagoPa Frame - Tax Payments"
          {...imageStyle}
        />
      </View>
      <CustomDivider />
    </>
  );
};
