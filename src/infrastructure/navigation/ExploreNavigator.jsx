import React from 'react';

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'

// screens
import { ExploreScreen } from '../../features/Explore/screens/ExploreScreen';

// components
import { EventNavigator } from './EventNavigator';
import { EventDetailScreen } from '../../features/Events/screens/EventDetailScreen';
import { BottomNavigation } from './BottomNavigation';


const ExploreStack = createNativeStackNavigator();  


export const ExploreNavigator = () => {
    return (
        <ExploreStack.Navigator >
            <ExploreStack.Screen 
                name='ExploreHome'
                component={BottomNavigation}
                options={{ headerShown: false }} 
            />
            {/* <ExploreStack.Screen 
                name='EventDetail'
                component={EventNavigator}
               
            /> */}
        </ExploreStack.Navigator>
    )
}
