import React from "react";
import { View, Text } from "native-base";
import { welcome, welcomeMessage, welcomeName } from "../../../../data/en";

const width = "100%";
const height = 193;

const styles = {
  welcomeContainer: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "purpleBlue.1", //theme
    width: width,
    height: height,
    px: 4,
    pt: 4,
  },
  textStyle: {
    textColor: {
      color: "white", //theme
    },
    title: {
      fontSize: 32,
      lineHeight: 39,
    },
    subtitle: {
      fontSize: 14,
    },
  },
};

export const WelcomeCard = () => {
  const {
    welcomeContainer,
    textStyle: { textColor, title, subtitle },
  } = styles;

  return (
    <View {...welcomeContainer}>
      <Text style={[textColor, title]}>{`${welcome}${welcomeName}`}</Text>
      <Text style={[textColor, subtitle]}>{welcomeMessage}</Text>
    </View>
  );
};
