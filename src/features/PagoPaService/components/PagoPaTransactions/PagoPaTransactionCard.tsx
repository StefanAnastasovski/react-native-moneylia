import React from "react";
import {
  Center,
  HStack,
  Image,
  Text,
  useTheme,
  View,
  VStack,
} from "native-base";
import { Card } from "../../../../components/Card/Card";
import { currencySign } from "../../../../data/en";
import { PagoPaFrame } from "../../../../assets/allImages";
import { PagoPaTransactionImage } from "./PagoPaTransactionImage";
import { PagoPaTransactionContent } from "./PagoPaTransactionContent";
import { ArrowRightIcon } from "../../../../assets/icons/ArrowRightIcon";

type PagoPaTransactionCardProps = {
  description: string;
  expiryDate: string;
  amount: string;
  style?: any;
};

const styles = {
  container: {
    px: 2,
    py: 3,
    flexDir: "row",
  },
  cardStyle: {
    height: "auto",
    marginBottom: 3,
  },
};

export const PagoPaTransactionCard = ({
  description,
  expiryDate,
  amount,
}: PagoPaTransactionCardProps) => {
  const { container, cardStyle } = styles;

  return (
    <Card {...cardStyle}>
      <VStack {...container}>
        <PagoPaTransactionImage />

        <PagoPaTransactionContent
          description={description}
          expiryDate={expiryDate}
          amount={amount}
        />
        <View
          width="24px"
          height="24px"
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
          marginLeft={2}
        >
          <ArrowRightIcon />
        </View>
      </VStack>
    </Card>
  );
};
