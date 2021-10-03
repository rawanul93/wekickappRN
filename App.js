import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { SvgXml } from "react-native-svg";

import { Text } from 'react-native';

import logoBrand from './assets/logo-brand.svg';

// screens
import { ExploreScreen } from './src/features/Explore/screens/ExploreScreen';

// theme
import { theme } from './src/infatructure/theme';
import { ThemeProvider } from 'styled-components/native';

// fonts
import { useFonts as useNotoSans, NotoSans_700Bold, NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components
import { LogoTitle } from './src/components/branding/LogoTitle';

//const isAndroid = Platform.OS === 'android'; // check which platform we are on.

const Create = () => <Text>Create</Text>;
const Schedule = () => <Text>Schedule</Text>;
const Alerts = () => <Text>Alerts</Text>;

const Tab = createBottomTabNavigator();

const MyTabs = () => {

}


export default function App() {

  const [notoSansLoaded] = useNotoSans({
    NotoSans_400Regular,
    NotoSans_700Bold
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if(!notoSansLoaded || !latoLoaded) {
    return null;
  }

//   function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('./assets/logo-brand.svg')}
//     />
//   );
// }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator >
            <Tab.Screen  options={{
              title: 'Explore',
              headerStyle: {
                backgroundColor: '#ffffff',
              },
              headerTintColor: '#000000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitle: () => <LogoTitle/>,

        }} name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Schedule" component={Schedule} />
            <Tab.Screen name="Alerts" component={Alerts} />

          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/> 
     
    </>
  );
}

const style = {
  headerShown: false
}


