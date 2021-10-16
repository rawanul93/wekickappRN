import React from "react";

// navigation
import {
  createNativeStackNavigator,
  TransitionPresets
} from "@react-navigation/native-stack";

// screens
import { LogInScreen } from "../../features/Account/screens/LogInScreen";
import { UserTypeScreen } from "../../features/Account/screens/UserTypeScreen";
import { SignUpScreen } from "../../features/Account/screens/SignUpScreen";

// components 
import { Text } from "../../components/typography/Text";


const AccountStack = createNativeStackNavigator();


const signUpHeaderOptions = (title) => {
    return {
      title: title,
      headerTransparent: true,
      headerStyle: {  
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
     
      headerTintColor: "#2E2E2E",
      headerTitleStyle: () => <Text variant='title'/> ,
      headerTitle: title,
      headerBackTitleVisible: false
   
    //   headerLeft: () => <Avatar.Image style={{marginLeft: 16}} size={34} source={require('../../../assets/avatar.png')} />,
  
    };
  };

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name='Log-in'
        component={LogInScreen}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name='Sign-up'
        component={SignUpScreen}
        options={() => signUpHeaderOptions('Create Account')}
      />
      <AccountStack.Screen
        name='User-type'
        component={UserTypeScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
};
