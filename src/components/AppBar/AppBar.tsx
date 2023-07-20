import React from "react";
import { HStack, IconButton, useTheme } from "native-base";
import { MoneyliaIcon } from "../../assets/icons/MoneyliaLogoIcon";
import { ChatIcon } from "../../assets/icons/ChatIcon";
import { AppBarProps } from "../../@types/AppBarProps";
import { useNavigation } from "@react-navigation/native";

const styles = {
  px: 4,
  justifyContent: "space-between",
  alignItems: "center",
  height: 60,
  w: "100%",
};

export const AppBar = ({
  backgroundColor,
  onPressMoneylia,
  onPressChat,
}: AppBarProps) => {
  const navigation = useNavigation();
  const {
    colors: { purpleBlue, lavender },
  } = useTheme();
  const pressedStyle = {
    bg: !backgroundColor ? purpleBlue[2] : lavender[2],
  };
  const extandedStyles = {
    ...styles,
    bg: backgroundColor ? backgroundColor : purpleBlue[1],
  };

  return (
    <HStack {...extandedStyles}>
      <IconButton
        icon={<MoneyliaIcon />}
        _pressed={pressedStyle}
        onPress={() => {
          console.log("left pressed");
          navigation.navigate("Dashboard");
        }}
      />
      <IconButton
        icon={<ChatIcon />}
        _pressed={pressedStyle}
        onPress={() => {
          console.log("right pressed");
          navigation.navigate("Profile");
        }}
      />
    </HStack>
  );
};
