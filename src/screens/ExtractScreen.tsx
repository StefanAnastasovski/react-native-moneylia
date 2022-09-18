import React from "react";
import { View, Text, Center } from "native-base";
import { SafeAreaView } from "react-native";

export const ExtractScreen = () => {
  return (
    <View flex={1} justifyContent="center">
      <SafeAreaView>
        <Center>
          <Text fontSize={50}>Extract</Text>
          <Text fontSize={32}>Coming Soon...</Text>
        </Center>
      </SafeAreaView>
    </View>
  );
};
