import React from "react";
import { View, Text } from "native-base";
import { pagoPaServiceTaxPayment } from "../../../../data/en";
import { PagoPaIcon } from "../../../../assets/icons/PagoPaIcon";

const styles = {
  taxContainer: {
    backgroundColor: "lavender.1", //theme
    px: 4,
    pt: 17.5,
    pb: 34.5,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  taxInnerContainer: {
    flexDir: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    textColor: {
      color: "white", //theme
    },
    title: {
      fontSize: 24,
      lineHeight: 29,
      fontWeight: "600",
      alignSelf: "center",
    },
  },
};

export const PagoPaServiceCard = () => {
  const {
    taxContainer,
    taxInnerContainer,
    textStyle: { textColor, title },
  } = styles;

  return (
    <View {...taxContainer}>
      <View {...taxInnerContainer}>
        <Text style={[textColor, title]}>{pagoPaServiceTaxPayment}</Text>
        <PagoPaIcon />
      </View>
    </View>
  );
};
