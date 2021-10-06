import React from "react";
import {
  StyleSheet,
  FlatList as EventList,
  View,
  Pressable,
  TouchableOpacity
} from "react-native";
import { Searchbar } from "react-native-paper";

//components
import { SafeArea } from "../../../components/utility/SafeArea";
import { EventCardExplore } from "../../Events/components/event-card-explore/EventCardExplore";

// check if there is StautusBar.currentHeight. It only exists for android

// import { SafeAreaView, StatusBar } from 'react-native';
// import styled from 'styled-components/native'

// const SafeArea = styled(SafeAreaView)`
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `

export const ExploreScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <EventList
        data={[{ name: 1, id: 0 }, { name: 2, id: 1 }]}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('EventDetail', {
                itemId: 86,
                otherParam: 'anything you want here',
              })
            }
          >
            <EventCardExplore />
          </Pressable>
        )}
        keyExtractor={(item) => item.name} // extract a key from the given data
        contentContainerStyle={{ padding: 0, marginBottom: 10 }} // apply style to each child
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 0,
    marginBottom: 30,
    backgroundColor: "green"
  },
  list: {
    flex: 1,
    padding: 0,
    backgroundColor: "#f1f1f1"
  },
  searchText: {
    color: "#2e2e2e"
  },
  searchbar: {
    borderRadius: 0
  }
});
