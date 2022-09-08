import React from "react";

import { View, Button } from "native-base";

const btnText = "Join for free";

const JoinButton = () => {
  const { btnContainer, btn: btnStyle } = styles;
  const btnHandler = () => {
    console.log("Button Clicked");
  };

  return (
    <View {...btnContainer}>
      <Button {...btnStyle} onPress={btnHandler}>
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
