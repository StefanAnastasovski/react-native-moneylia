import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs } from "./BottomTabs/BottomTabs";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Login"} component={LoginScreen} />

      <Stack.Screen name={"Dashboard"} component={BottomTabs} />
    </Stack.Navigator>
  );
};
