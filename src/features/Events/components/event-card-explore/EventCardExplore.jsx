import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import { Spacer }  from '../../../../components/spacer/Spacer';
import { Text }  from '../../../../components/typography/Text';
import { UserAvatar } from '../../../../components/avatar/Avatar';
import { Row } from '../../../../components/row/Row'

//styles 
import { EventCard, EventCover, InfoWrapper } from "./event-card-explore.styles";


// import { SvgXml } from 'react-native-svg';
// import priceIcon from '../../../../assets/priceIcon.svg';



export const EventCardExplore = ({ event = {} }) => {

    const { 
        name = 'Summer Heat - Pickup Series', 
        photo ='https://static01.nyt.com/images/2021/07/09/world/09italy-soccer02/merlin_190474830_068c22dc-9611-4e44-9318-7c3acbb78065-mobileMasterAt3x.jpg', 
        levels = ['Advanced', 'Semi-pro'], 
        tags = ['Pickup', '7v7', 'Indoor', 'Tournament'],
        location = 'Toronto Soccerplex', 
        startTime = '09:00 AM', 
        endTime = '12:00 PM',
        startDate = '21 Oct',
        endDate = '21 Oct',
        startDay = 'Sat',
        endDay = 'Sat',
        price = 20,
        spots = {spots: 20, spotsLeft: 10, spotsString: '20', spotsLeftString: '10 spots left'},
        hostId = 1,
        coHostId = [1,2],
        hostName = 'Daniel Ashram',
        hostType = 'Coach',
        posted = '10 hours ago'


    } = event;

    return (
        <EventCard>
            <Row variant='split'>
                <Row>
                    <Spacer variant='left4'/>
                    <Avatar.Image size={36} source={require('../../../../../assets/avatar.png')} />
                    <Spacer variant='right4'/>
                    <View>
                        <Text variant='body'>{hostName}</Text>
                        <Spacer variant='bottom1'/>
                        <Text variant='tag'>{hostType}</Text>
                    </View>
                </Row>
                <Row>
                    <Text variant='tag'>{posted}</Text>
                    <Spacer variant='right4'/>
                </Row>
              
            </Row>
           
            <Spacer variant='top5'/>
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
            <Spacer variant='bottom1'/>
            <EventCover source={{url: photo}}/>

            {/* <Image source={{url: photo}} style={{ width: 200, height: 200 }}/> */}

            <InfoWrapper>
                <Text variant='title'>{name}</Text>
                <Spacer variant='bottom5'/>
                <Row>
                    <Icon style={styles.icon} size={15} color='#bdbdbd' name='map-marker'/>
                        <Spacer variant={'left2'}/>                  
                    <Text variant='bodyBold'>{location}</Text>
                </Row>
                <Spacer variant='bottom4'/>
                <Row>
                    <Icon style={styles.dateIcon} size={12} color='#bdbdbd' name='clock-time-three'/>
                        <Spacer variant={'left2'}/>
                    <Text variant='bodyBoldGrey'>{startDay},</Text>
                        <Spacer variant={'left1'}/>
                    <Text variant='bodyGrey'>{startDate},</Text>
                        <Spacer variant={'left1'}/>
                    <Text variant='bodyGrey'>{startTime}</Text>
                </Row>
                <Spacer variant='bottom4'/>
                <Row>
                    <Icon style={styles.icon} size={16} color='#bdbdbd' name='currency-usd'/>
                        <Spacer variant={'left1'}/>
                    <Text variant='bodyBold'>${price}</Text>
                        <Spacer variant={'left2'}/>
                    <Icon style={styles.circleIcon} size={6} color='#bdbdbd' name='circle-outline'/>
                        <Spacer variant={'left2'}/>
                    <Text variant='highlighted'>{spots.spotsLeftString}</Text>

                </Row>
            </InfoWrapper>
            <Spacer variant='bottom2'/>
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

    text: {
        fontSize: 12,
        marginBottom: 'auto',
        marginTop: 'auto',
        textAlign: 'center',
    },


    level: {
        backgroundColor: 'transparent',
        padding: 0,
        marginLeft: 6,
        height: 25
    },
 

    icon: {
        alignSelf: 'center'
    },
    
    dateIcon: {
        alignSelf: 'center',
        paddingLeft: 2
    },

    circleIcon: {
        alignSelf: 'center',
        paddingTop: 2
    },

    listItem: {
        padding: 0
    }

  });
