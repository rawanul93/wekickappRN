import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const Background = styled(View)`
    background-color: black;
    flex: 1
`

export const ImageWrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Cover = styled(Image).attrs({
    source: require("../../../../assets/signup-background.png")
})`
    height: 120%;
    width: 100%;
    top: 10%;
    opacity: 0.5;
`

export const Logo = styled(Image).attrs({
    source: require("../../../../assets/logo-brand-light-green.png")
})`
    position: absolute;
    height: 34px;
    width: 150px;
    /* top: 38%;
    left: 30%; */
`


