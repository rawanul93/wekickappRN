import React, { useEffect } from 'react';

import { Text, Pressable } from 'react-native';
import { SafeArea } from '../../../components/utility/SafeArea';
import { EventCardExplore } from '../../Events/components/event-card-explore/EventCardExplore';
import { EventNavigator } from '../../../infrastructure/navigation/EventNavigator';

export const ScheduleScreen = ({ route, navigation }) => {

    //const { eventId } = route.params;

    useEffect(() => {
       console.log(route)
      });

    return (
        <SafeArea>
            <Text>HELLLOO</Text>
            
         

          <Pressable
            onPress={() =>
              navigation.navigate('EventDetail', {
                itemId: 86,
                otherParam: 'anything you want here',
    
              })
            }
          >  
                <EventCardExplore></EventCardExplore>

          </Pressable>
          
        </SafeArea>
    )
}
