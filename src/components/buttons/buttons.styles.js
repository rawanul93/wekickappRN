import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../infrastructure/theme/colors';


export const ButtonWrapper = styled(View)`
    display: flex;
`

export const ButtonSecondary = styled(Button).attrs({
    color: colors.brand.secondary,
    mode: "contained"
})`
    border-radius: 8px;
`

export const ButtonPrimary = styled(Button).attrs({
    color: colors.brand.primary,
    mode: "contained"
})`
    border-radius: 8px;
`




