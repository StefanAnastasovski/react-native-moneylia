import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../../screens/DashboardScreen";
import { ExtractScreen } from "../../screens/ExtractScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import PagoPaServiceScreen from "../../screens/PagoPaServiceScreen";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 20, paddingTop: 8 },
        headerStyle: { backgroundColor: "#7476ED" },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen name={"Dashboard"} component={DashboardScreen} />
      <Tab.Screen name={"Extract"} component={ExtractScreen} />
      <Tab.Screen name={"PagoPA"} component={PagoPaServiceScreen} />
      <Tab.Screen name={"Profile"} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
