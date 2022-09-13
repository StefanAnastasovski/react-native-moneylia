import React from "react";
import { View, Text, Button } from "native-base";
import { currencySign, paymentDetails } from "../../../data/en";

const styles = {
  shadowStyle: {
    backgroundColor: "white",
    shadowColor: "#000000",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  container: {
    pt: 4,
    pb: 6,
    px: 4,
  },
  textContainer: {
    py: 4,
    flexDir: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 600,
    color: "purpleBlue.3",
  },
  amountStyle: {
    fontSize: 20,
    color: "errors.1",
  },
  btnStyle: {
    backgroundColor: "lavender.1",
    _text: {
      color: "white",
      fontSize: 18,
      fontWeight: 600,
    },
    _pressed: {
      bg: "lavender.2",
    },
  },
};

export const PaymentDetailsPayNowCard = ({ amount }: { amount?: string }) => {
  const {
    container,
    textContainer,
    titleStyle,
    amountStyle,
    btnStyle,
    shadowStyle,
  } = styles;
  const currency = currencySign.euro.value;
  const { totalDue, ctaPayNow } = paymentDetails;
  return (
    <View {...shadowStyle}>
      <View {...container}>
        <View {...textContainer}>
          <Text {...titleStyle}>{totalDue}</Text>
          <Text {...amountStyle}>{`${currency} ${amount || "0.00"}`}</Text>
        </View>
        <Button {...btnStyle} onPress={() => console.log("Pay Now!")}>
          {ctaPayNow}
        </Button>
      </View>
    </View>
  );
};
