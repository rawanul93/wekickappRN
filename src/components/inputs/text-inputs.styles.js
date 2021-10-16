import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';

export const InputWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`


export const EmailInput = styled(TextInput).attrs({
    textContentType: 'emailAddress',
    keyboardType: 'email-address',
    underlineColor:'#B4B4B4',
    selectionColor: colors.brand.primary,
    autoCapitalize:'none',
    dense: true
})`
    background-color: transparent;
    border-radius: 12px;
    height: 60px;
    padding-horizontal: 0;
` 

export const PasswordInput = styled(TextInput).attrs({
    // label: 'Password*',
    textContentType: 'emailAddress',
    underlineColor:'#B4B4B4',
    selectionColor: colors.brand.primary,
    autoCapitalize:'none',
    dense: true
})`
    background-color: transparent;
    border-radius: 12px;
    height: 60px;
    padding-horizontal: 0;
` 

export const NameInputSmall = styled(TextInput).attrs({
    underlineColor:'#B4B4B4',
    selectionColor: colors.brand.primary,
    dense: true
})`
    background-color: transparent;
    border-radius: 12px;
    height: 60px;
    padding-horizontal: 0;
    width:48%;
` 
export const NameInput = styled(TextInput).attrs({
    underlineColor:'#B4B4B4',
    selectionColor: colors.brand.primary,
    dense: true
})`
    background-color: transparent;
    border-radius: 12px;
    height: 60px;
    padding-horizontal: 0;

` 
