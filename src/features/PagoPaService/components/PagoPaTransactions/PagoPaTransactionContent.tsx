import React from "react";
import { HStack, Text, useTheme, View } from "native-base";
import { currencySign } from "../../../../data/en";
import { getNumberOfCharacters } from "../../utils/getNumberOfCharacters";

type PagoPaTransactionBodyProps = {
  description: string;
  expiryDate: string;
  amount: string;
  style?: any;
};

const styles = {
  container: {
    px: 2,
    py: 3,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: "space-around",
  },
  valueContainer: {
    justifyContent: "space-between",
  },
  descriptionStyle: {
    lineHeight: 15,
    textTransform: "uppercase",
  },
  valueFontSize: {
    fontSize: 14,
  },
};

export const PagoPaTransactionContent = ({
  description,
  expiryDate,
  amount,
}: PagoPaTransactionBodyProps) => {
  const {
    colors: { purpleBlue, errors, neutral },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    descriptionColor: {
      color: purpleBlue[3],
    },
    expiryDateColor: {
      color: neutral[1],
    },
    errorMessage: {
      color: errors[1],
    },
  };
  const {
    contentContainer,
    valueContainer,
    descriptionStyle,
    valueFontSize,
    descriptionColor,
    errorMessage,
    expiryDateColor,
  } = extendedStyles;

  const currency = currencySign["euro"]?.value || "$";
  const descriptionFontSize =
    getNumberOfCharacters(description) > 55
      ? { fontSize: 12.5 }
      : { fontSize: 14 };

  return (
    <View {...contentContainer}>
      <Text
        style={[descriptionFontSize, descriptionColor, descriptionStyle]}
        numberOfLines={2}
      >
        {description}
      </Text>
      <HStack {...valueContainer}>
        <Text style={[expiryDateColor, valueFontSize]}>{expiryDate}</Text>
        <Text
          style={[valueFontSize, errorMessage]}
        >{`${currency} ${amount}`}</Text>
      </HStack>
    </View>
  );
};
