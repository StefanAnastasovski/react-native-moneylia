import React from "react";

import { Center, View, Text, Pressable } from "native-base";

const findOutMore = "Don't have SPID or CIE? Find out more";

const FindOutMore = () => {
  const findOutMoreHandler = () => {
    console.log("findOutMore Clicked - Redirect");
  };
  return (
    <View>
      <Center>
        <Pressable onPress={findOutMoreHandler}>
          <Text {...styles.findOutMoreText}>{findOutMore}</Text>
        </Pressable>
      </Center>
    </View>
  );
};

export default FindOutMore;

const styles = {
  findOutMoreText: {
    color: "purpleBlue.2",
    underline: true,
  },
};
