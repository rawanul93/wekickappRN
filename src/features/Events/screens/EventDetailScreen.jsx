import React, { useEffect } from 'react';

import { Text } from 'react-native';
import { SafeArea } from '../../../components/utility/SafeArea';

export const EventDetailScreen = ({ route }) => {

    //const { eventId } = route.params;

    useEffect(() => {
       console.log(route)
      });

    return (
        <SafeArea>
            <Text>HELLLOO</Text>
        </SafeArea>
    )
}
