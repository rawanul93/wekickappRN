import React from "react";
import { Text } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ExploreNavigator } from "./ExploreNavigator";

// icons
import { NavIcon } from "../../components/svgs/NavIcon";
import { LogoTitle } from "../../components/branding/LogoTitle";
import { EventDetailScreen } from "../../features/Events/screens/EventDetailScreen";
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'
import { EventNavigator } from "./EventNavigator";

// const Create = () => <Text>Create</Text>;
// const Schedule = () => <Text>Schedule</Text>;
// const Alerts = () => <Text>Alerts</Text>;

// const Tab = createBottomTabNavigator();


export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ExploreNavigator/>
      <EventNavigator/>
    </NavigationContainer>
  );
};
