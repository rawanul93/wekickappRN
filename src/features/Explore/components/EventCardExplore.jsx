import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Chip, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from 'styled-components/native';

const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
    margin-top: ${(props) => props.theme.space[3]};
`

const EventCover = styled(Card.Cover)`
    height: 85px;
    min-width: 100%;
`

const EventCard = styled(Card)`
    border-radius: 0px;
    margin-top: 20px;
    box-shadow: 0px 4px 4px #E9E9E9;
`

export const EventCardExplore = ({ event = {} }) => {

    const { 
        name = 'Some Event', 
        photo ='https://static01.nyt.com/images/2021/07/09/world/09italy-soccer02/merlin_190474830_068c22dc-9611-4e44-9318-7c3acbb78065-mobileMasterAt3x.jpg', 
        levels = ['Advanced', 'Semi-pro'], 
        tags = ['Pickup', '7v7', 'Indoor', 'Tournament'],
        location = '69 Death Valley', 
        startTime = '09:00 AM', 
        endTime = '12:00 PM',
        startDate = '21 Oct',
        endDate = '21 Oct',
        startDay = 'Sat',
        endDay = 'Sat',
        price = '$20',
        spots = 20
    } = event;

    return (
        <EventCard>
            <ScrollView horizontal={true}>
                <View style={styles.tags}>
                    <>
                        {
                            levels.map(level => {
                                return <Chip mode='outlined' style={styles.level} textStyle={styles.text}>{level}</Chip>
                            })
                        }

                        {   
                            tags.map(tag => {
                                return <Chip mode='outlined' style={styles.level} textStyle={styles.text}>{tag}</Chip>
                            })
                        }
                    </>
                
                </View>
            </ScrollView>
            <EventCover source={{url: photo}}/>
            
          
            <Card.Content>
                <Title>Summer Heat - Pickup Series</Title>
                <List.Section>
                    <>
                        <List.Item style={styles.listItem} titleStyle={styles.location} title={location} left={props => <Icon {...props} style={styles.icon} size={15} color='#bdbdbd' name='map-marker'/>}/>
                        <List.Item style={styles.listItem} titleStyle={styles.location} title={startTime} left={props => <Icon {...props} style={styles.icon1} size={12} color='#bdbdbd' name='clock-time-three'/>}/>
                    </>
                </List.Section>
               
            </Card.Content>
        </EventCard>
    )
}

const styles = StyleSheet.create({

    tags: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        overflow: 'scroll'
       
    },
    level: {
        backgroundColor: 'transparent',
        padding: 0,
        marginLeft: 6,
    },
    text: {
        fontSize: 12,
        padding: 0
    },
    cover: {
        height: 85,
        minWidth: 100
    },
    title: {
        fontSize: 17,
        marginTop: 8
    },
    icon: {
        alignSelf: 'center'
    },
    icon1: {
        alignSelf: 'center',
        paddingLeft: 2
    },
    listItem: {
        padding: 0
    },
    location: {
        fontSize: 14,
        color: 919191
    }

  });
