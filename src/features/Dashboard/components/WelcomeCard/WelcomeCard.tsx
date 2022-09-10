import React from "react";
import { View, useTheme, Text } from "native-base";
import { welcome, welcomeMessage, welcomeName } from "../../../../data/en";

const width = "100%";
const height = 193;

export const WelcomeCard = () => {
  const {
    colors: { purpleBlue, white },
  } = useTheme();

  const styles = {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: purpleBlue[1],
    width: width,
    height: height,
    px: 4,
    pt: 4,
  };

  const textStyle = {
    textColor: {
      color: white,
    },
    title: {
      fontSize: 32,
      lineHeight: 39,
    },
    subtitle: {
      fontSize: 14,
    },
  };

  return (
    <View {...styles}>
      <Text
        style={[textStyle.textColor, textStyle.title]}
      >{`${welcome}${welcomeName}`}</Text>
      <Text style={[textStyle.textColor, textStyle.subtitle]}>
        {welcomeMessage}
      </Text>
    </View>
  );
};
