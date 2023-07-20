import React from "react";

import { Center, View, Text, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";

const findOutMore = "Don't have SPID or CIE? Find out more";

const FindOutMore = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Center>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
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
