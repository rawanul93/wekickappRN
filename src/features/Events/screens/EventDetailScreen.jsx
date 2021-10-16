import React, { useEffect } from 'react';

import { Text } from 'react-native';
import { SafeArea } from '../../../components/utility/SafeArea';
import { useSelector } from 'react-redux';

export const EventDetailScreen = ({ route }) => {

    const uId = useSelector(state => state.user.uId);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    //const { eventId } = route.params;

    useEffect(() => {
       console.log(route)
       console.log(uId);
       console.log(isAuthenticated);

      });

    return (
        <SafeArea>
            <Text>HELLLOO</Text>
        </SafeArea>
    )
}
