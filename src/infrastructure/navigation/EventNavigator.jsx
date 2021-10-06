import React from 'react';
import { Text } from 'react-native';

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'

// screens
import { EventDetailScreen } from '../../features/Events/screens/EventDetailScreen';

const EventStack = createNativeStackNavigator();  

export const EventNavigator = () => {
    return (
        <EventStack.Navigator >
            <EventStack.Screen 
                name='EventDetail'
                component={EventDetailScreen}
                options={{ headerShown: false }} 
            />
            <EventStack.Screen 
                name='Members'
                component={() => <Text>Members</Text>}
                options={{ headerShown: false }} 
            />
        </EventStack.Navigator>
    )
}
