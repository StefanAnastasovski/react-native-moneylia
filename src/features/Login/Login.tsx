import React from "react";

import { View } from "native-base";
import JoinImage from "./components/JoinImage";
import JoinContent from "./components/JoinContent";
import JoinButton from "./components/JoinButton";
import FindOutMore from "./components/FindOutMore";

const Login = () => {
  const { container, joinContainer } = styles;
  return (
    <View {...container}>
      <View style={joinContainer}>
        <JoinImage />
        <JoinContent />
        <JoinButton />
        <FindOutMore />
      </View>
    </View>
  );
};

export default Login;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
  },
  joinContainer: {
    paddingLeft: 6,
    paddingRight: 6,
  },
};
