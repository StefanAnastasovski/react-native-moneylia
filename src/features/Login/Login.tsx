import React from "react";

import { View } from "native-base";
import JoinImage from "./components/JoinImage";
import JoinContent from "./components/JoinContent";
import JoinButton from "./components/JoinButton";
import FindOutMore from "./components/FindOutMore";

const Login = () => {
  const { joinContainer } = styles;
  return (
    <View style={joinContainer}>
      <JoinImage />
      <JoinContent />
      <JoinButton />
      <FindOutMore />
    </View>
  );
};

export default Login;

const styles = {
  joinContainer: {
    paddingLeft: 6,
    paddingRight: 6,
  },
};
