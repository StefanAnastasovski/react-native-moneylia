import React from "react";
import { View, Text, Center, Button } from "native-base";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const { btnContainer, btn: btnStyle } = styles;
  return (
    <View flex={1} justifyContent="center">
      <SafeAreaView>
        <Center>
          <Text fontSize={50}>Profile</Text>
          <Text fontSize={32}>Coming Soon...</Text>
        </Center>

        <View {...btnContainer}>
          <Button {...btnStyle} onPress={() => navigation.navigate("Login")}>
            Log Out
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

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
