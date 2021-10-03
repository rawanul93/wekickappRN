import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

//components
import { SafeArea } from '../../../components/utility/SafeArea';
import { EventCardExplore } from '../components/event-card/EventCardExplore';

// check if there is StautusBar.currentHeight. It only exists for android

// import { SafeAreaView, StatusBar } from 'react-native';
// import styled from 'styled-components/native'

// const SafeArea = styled(SafeAreaView)`
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
// `

 export const ExploreScreen = () => {
    return (
        <SafeArea>
            <View style={styles.search}>
                <Searchbar/>
            </View>
            <FlatList 
              data={[{name: 1}, {name: 2}]} 
              renderItem={() => <EventCardExplore />}
              keyExtractor={(item) => item.name} // extract a key from the given data
              contentContainerStyle={{padding: 0, marginBottom: 10}} // apply style to each child
              />
        </SafeArea>
    );
}

const styles = StyleSheet.create({

  search: {
    padding: 0, 
    marginBottom: 30,
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