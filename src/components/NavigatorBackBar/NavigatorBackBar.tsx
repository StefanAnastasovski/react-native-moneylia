import React from "react";
import { HStack, IconButton, Text, useTheme, View } from "native-base";
import { AppBarProps } from "../../@types/AppBarProps";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { paymentDetailsTitle } from "../../data/en";
import { useNavigation } from "@react-navigation/native";

const styles = {
  container: {
    px: 4,
    alignItems: "center",
    height: 60,
    w: "100%",
  },
  btnContainer: { position: "absolute", left: 15, zIndex: 1 },
  innerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
};

export const NavigatorBackBar = ({ backgroundColor, onPress }: AppBarProps) => {
  const navigation = useNavigation();
  const {
    colors: { lavender },
  } = useTheme();
  const pressedStyle = lavender[2];
  const extandedStyles = {
    ...styles,
    container: {
      ...styles.container,
      bg: backgroundColor ? backgroundColor : lavender[2],
    },
  };

  const { container, btnContainer, innerTextContainer, textStyle } =
    extandedStyles;

  return (
    <HStack {...container}>
      <View {...btnContainer}>
        <IconButton
          icon={<ArrowLeftIcon />}
          _pressed={pressedStyle}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View {...innerTextContainer}>
        <Text {...textStyle}>{paymentDetailsTitle}</Text>
      </View>
    </HStack>
  );
};
