import React from "react";

import { View, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const btnText = "Join for free";

const JoinButton = () => {
  const navigation = useNavigation();
  const { btnContainer, btn: btnStyle } = styles;

  return (
    <View {...btnContainer}>
      <Button {...btnStyle} onPress={() => navigation.navigate("Dashboard")}>
        {btnText}
      </Button>
    </View>
  );
};

export default JoinButton;

const styles = {
  btnContainer: {
    marginTop: 60,
    marginBottom: 6,
    alignItems: "center",
  },
  btn: {
    height: 50,
    width: 260,
    backgroundColor: "purpleBlue.1",
    _text: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 18,
      color: "white",
    },
  },
};
