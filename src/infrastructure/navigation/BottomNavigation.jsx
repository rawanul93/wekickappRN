import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavIcon } from "../../components/svgs/NavIcon";
import { LogoTitle } from "../../components/branding/LogoTitle";

import { Text } from 'react-native';
import { Avatar } from 'react-native-paper';

// screens
import { ExploreScreen } from '../../features/Explore/screens/ExploreScreen';
import { ScheduleScreen } from "../../features/Schedule/screens/ScheduleScreen";

const Create = () => <Text>Create</Text>;
const Schedule = () => <Text>Schedule</Text>;
const Alerts = () => <Text>Alerts</Text>;

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
    return {
      tabBarIcon: ({ focused }) => {
        if (route.name === "Explore")
          return <NavIcon name={route.name} isActive={focused} />;
        else if (route.name === "Create") {
          return <NavIcon name='Create' isActive={focused} />;
        } else if (route.name === "Schedule") {
          return <NavIcon name='Schedule' isActive={focused} />;
        } else if (route.name === "Alerts") {
          return <NavIcon name='Alerts' isActive={focused} />;
        }
      },
  
      tabBarActiveTintColor: "#00A355",
      tabBarInActiveTintColor: "#6A6A6A"
    };
  };


  const headerOptions = () => {
    return {
      title: "Explore",
      headerStyle: {
        backgroundColor: "#ffffff"
      },
      headerTintColor: "#000000",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: () => <LogoTitle />,
      headerLeft: () => <Avatar.Image style={{marginLeft: 16}} size={34} source={require('../../../assets/avatar.png')} />,
  
    };
  };
  

export const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name='Explore'
        options={headerOptions}
        component={ExploreScreen}
      />

      <Tab.Screen 
        name='Create' 
        options={headerOptions} 
        component={Create}
      />

      <Tab.Screen
        name='Schedule'
        options={headerOptions}
        component={ScheduleScreen}
      />

      <Tab.Screen 
        name='Alerts' 
        options={headerOptions} 
        component={Alerts} 
      />

    </Tab.Navigator>
  );
};
