import React from "react";
import { SafeAreaView } from "react-native";
import { View, useTheme, StatusBar } from "native-base";
import { NavigatorBackBar } from "../../components/NavigatorBackBar/NavigatorBackBar";
import { PaymentDetailsHeader } from "./components/PaymentDetailsHeader";
import { PaymentDetailsRow } from "./components/PaymentDetailsRow";
import { paymentDetails } from "../../data/en";

const styles = {
  container: {
    flex: 1,
    bg: "background.2",
    px: 4,
  },
  rootContainer: {
    flex: 1,
  },
  barStyle: "light-content",
};

export const PaymentDetails = () => {
  const {
    colors: { lavender, background },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    statusBar: {
      flex: 0,
      backgroundColor: lavender[1],
    },
    safeAreaViewBg: {
      backgroundColor: background[2],
    },
  };
  const { rootContainer, container, statusBar, safeAreaViewBg, barStyle } =
    extendedStyles;

  const {
    creditorTitle,
    creditor,
    casual,
    expiryDateTitle,
    creditorTaxCodeTitle,
    creditorTaxCode,
    noticeCodeTitle,
    noticeCode,
  } = paymentDetails;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={statusBar} />
      <SafeAreaView style={[rootContainer, safeAreaViewBg]}>
        <NavigatorBackBar backgroundColor="lavender.1" />
        <View {...container}>
          <PaymentDetailsHeader />
          <PaymentDetailsRow title={creditorTitle} text={creditor} />
          <PaymentDetailsRow title={casual} text={creditor} />
          <PaymentDetailsRow title={expiryDateTitle} text={creditor} />
          <PaymentDetailsRow
            title={creditorTaxCodeTitle}
            text={creditorTaxCode}
          />
          <PaymentDetailsRow title={noticeCodeTitle} text={noticeCode} />
        </View>
      </SafeAreaView>
    </>
  );
};
