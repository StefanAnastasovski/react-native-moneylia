import React from "react";
import { SafeAreaView } from "react-native";
import { View, useTheme, StatusBar, ScrollView } from "native-base";
import { NavigatorBackBar } from "../../components/NavigatorBackBar/NavigatorBackBar";
import { PaymentDetailsHeader } from "./components/PaymentDetailsHeader";
import { PaymentDetailsRow } from "./components/PaymentDetailsRow";
import { pagoPaTransactionList, paymentDetails } from "../../data/en";
import { PaymentDetailsPayNowCard } from "./components/PaymentDetailsPayNowCard";
import { useRoute } from "@react-navigation/native";
import { getPaymentDetails } from "./utils/getPaymentDetails";

const styles = {
  container: {
    flex: 1,
    bg: "white",
    px: 4,
  },
  rootContainer: {
    flex: 1,
  },
  barStyle: "light-content",
};

export const PaymentDetails = () => {
  const route = useRoute();
  const { id } = route.params;
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
      backgroundColor: "white",
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

  const paymentData = getPaymentDetails(id);
  const { description, expiryDate, amount } = paymentData[0] || {};
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={statusBar} />
      <SafeAreaView style={[rootContainer, safeAreaViewBg]}>
        <NavigatorBackBar backgroundColor="lavender.1" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View {...container}>
            <PaymentDetailsHeader />
            <PaymentDetailsRow title={creditorTitle} text={creditor} />
            <PaymentDetailsRow title={casual} text={description} />
            <PaymentDetailsRow title={expiryDateTitle} text={expiryDate} />
            <PaymentDetailsRow
              title={creditorTaxCodeTitle}
              text={creditorTaxCode}
            />
            <PaymentDetailsRow
              title={noticeCodeTitle}
              text={noticeCode}
              useDevider={false}
            />
          </View>
          <PaymentDetailsPayNowCard amount={amount} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
