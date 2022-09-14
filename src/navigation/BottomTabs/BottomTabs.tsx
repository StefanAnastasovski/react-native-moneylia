import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../../screens/DashboardScreen";
import { ExtractScreen } from "../../screens/ExtractScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import PagoPaServiceScreen from "../../screens/PagoPaServiceScreen";
import { DashboardIcon } from "../../assets/icons/DashboardIcon";
import { ExtractIcon } from "../../assets/icons/ExtractIcon";
import { PagoPANavIcon } from "../../assets/icons/PagoPANavIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";
import { Text, View } from "native-base";

const Tab = createBottomTabNavigator();
const color = "#A5A5AA";
const focusColor = "#7476ED";
const styles = {
  iconContainer: {
    flex: 1,
    pt: 2,
    mb: 2,
  },
  labelStyle: {
    fontSize: 11,
  },
};

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabStyle,
      }}
    >
      <Tab.Screen
        name={"Dashboard"}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
            // borderTopWidth={focused ? 2 : null}
            // borderTopColor={focused ? focusColor : null}
            >
              <DashboardIcon fill={focused ? focusColor : color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text color={focused ? focusColor : color} {...styles.labelStyle}>
                Dashboard
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={"Extract"}
        component={ExtractScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
            // borderTopWidth={focused ? 2 : null}
            // borderTopColor={focused ? focusColor : null}
            >
              <ExtractIcon fill={focused ? focusColor : color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text color={focused ? focusColor : color} {...styles.labelStyle}>
                Extract
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={"PagoPA"}
        component={PagoPaServiceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
            // borderTopWidth={focused ? 2 : null}
            // borderTopColor={focused ? focusColor : null}
            >
              <PagoPANavIcon fill={focused ? focusColor : color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text color={focused ? focusColor : color} {...styles.labelStyle}>
                Profile
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              // borderTopWidth={focused ? 2 : null}
              // borderTopColor={focused ? focusColor : null}
            >
              <ProfileIcon fill={focused ? focusColor : color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text color={focused ? focusColor : color} {...styles.labelStyle}>
                Dashboard
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
