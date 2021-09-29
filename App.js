import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';

import { ExploreScreen } from './src/features/Explore/screens/ExploreScreen';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infatructure/theme';

//const isAndroid = Platform.OS === 'android'; // check which platform we are on.

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ExploreScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto'/> 
     
    </>
  );
}


