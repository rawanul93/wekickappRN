import React from 'react'
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

//components
import { EventCardExplore } from '../components/EventCardExplore';

const SafeArea = styled(SafeAreaView)`
  flex: 1; 
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
`
// check if there is StautusBar.currentHeight. It only exists for android


export const ExploreScreen = () => {
    return (
        <SafeArea style={styles.container}>
            <View style={styles.search}>
                <Searchbar/>
            </View>
            <View style={styles.list}>
                <EventCardExplore />
            </View>
        </SafeArea>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 0, 
    backgroundColor: 'green'
  },
  list: {
    flex: 1, 
    padding: 0,
    backgroundColor: '#f1f1f1'
  },
  searchText: {
    color: '#2e2e2e'
  },
  searchbar: {
    borderRadius: 0
  }

});