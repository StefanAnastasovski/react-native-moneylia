import React from "react";
import { Center, Text, useTheme, View, VStack } from "native-base";
import { Card } from "../../../../components/Card/Card";
import { currencySign, valueUnavailable } from "../../../../data/en";

type ContributionsBodyCardProps = {
  title: string;
  value: string;
  icon: any;
  style?: any;
};

const styles = {
  container: {
    width: "50%",
  },
  cardContainer: {},
  flex1: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 2,
  },
  titleStyle: {
    fontSize: 12,
    color: "neutral.2",
  },
  valueFontSize: {
    fontSize: 16,
  },
};

export const ContributionsBodyCard = ({
  icon,
  title,
  value,
  style,
}: ContributionsBodyCardProps) => {
  const {
    colors: { purpleBlue, errors },
  } = useTheme();

  const extendedStyles = {
    ...styles,
    valueColor: {
      color: purpleBlue[2],
    },
    errorMessage: {
      color: errors[1],
    },
  };
  const {
    container,
    cardContainer,
    contentContainer,
    flex1,
    titleStyle,
    valueFontSize,
    valueColor,
    errorMessage,
  } = extendedStyles;

  const currency = currencySign["euro"]?.value || "$";
  const isValueAvailable = value !== valueUnavailable;

  return (
    <View {...{ ...style, ...container }}>
      <Card>
        <VStack {...flex1}>
          <Center style={[cardContainer, flex1]}>
            {icon}
            <View {...contentContainer}>
              <Center>
                <Text {...titleStyle}>{title}</Text>
                {isValueAvailable ? (
                  <Text style={[valueFontSize, valueColor]}>
                    {`${currency} ${value}`}
                  </Text>
                ) : (
                  <Text style={[valueFontSize, errorMessage]}>
                    {valueUnavailable}
                  </Text>
                )}
              </Center>
            </View>
          </Center>
        </VStack>
      </Card>
    </View>

    // € currencySign
  );
};
