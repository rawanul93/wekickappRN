import styled from 'styled-components/native';
import { View } from 'react-native';
// import { space } from '../../infrastructure/theme/spacing';

export const Container = styled(View)`
    flex: 3.5;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: white;
    padding-top: 10px;
    padding-left: ${(props) => props.theme.space[4]};
    padding-right: ${(props) => props.theme.space[4]};
    
    /* margin-bottom: ${(props) => props.theme.space[4]}; */
`