import React from 'react'
import { UserAvatar } from './avatar.styles';

// import { Avatar } from 'react-native-paper';

const Avatar = ({size}) => {
    return (
        <UserAvatar size={size} source={require('../../../assets/avatar.png')} />
    )
}

export default Avatar;
