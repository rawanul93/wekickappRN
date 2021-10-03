import styled from 'styled-components/native';
import { View } from 'react-native';
import { Card } from 'react-native-paper';


export const EventCard = styled(Card)`
    border-radius: 0px;
    margin-top: 17px;
    margin-bottom: 17px;
    padding-top: ${(props) => props.theme.space[5]};
    box-shadow: 0px 4px 4px #E9E9E9;
`

export const EventCover = styled(Card.Cover)`
    height: 85px;
    min-width: 100%;
`
export const InfoWrapper = styled(View)`
    margin-top: ${(props) => props.theme.space[4]};
    padding-left: ${(props) => props.theme.space[4]};
    padding-right: ${(props) => props.theme.space[4]};
    padding-bottom: ${(props) => props.theme.space[2]};
`

export const Row = styled(View)`
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: ${(props) => props.theme.space[4]};
`