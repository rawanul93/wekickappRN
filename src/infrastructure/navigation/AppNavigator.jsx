import React from "react";
import { Text } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'

import { BottomNavigation } from './BottomNavigation';
import { EventNavigator } from './EventNavigator';

// const Create = () => <Text>Create</Text>;
// const Schedule = () => <Text>Schedule</Text>;
// const Alerts = () => <Text>Alerts</Text>;

// const Tab = createBottomTabNavigator();

const AppStack = createNativeStackNavigator();  

export const AppNavigator = () => {
  return (
       <AppStack.Navigator >
            <AppStack.Screen 
                name='Main-Navigation'
                component={BottomNavigation}
                options={{ headerShown: false }} 
            />
            <AppStack.Screen 
                name='EventDetail'
                component={EventNavigator}
            />
        </AppStack.Navigator>
  );
};
