import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

// theme
import { theme } from './src/infrastructure/theme'
import { ThemeProvider } from 'styled-components/native';

// fonts
import { useFonts as useNotoSans, NotoSans_700Bold, NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

// components
import { Navigation } from './src/infrastructure/navigation';

// redux
import { store } from './src/redux/store';

//const isAndroid = Platform.OS === 'android'; // check which platform we are on.






//// FONTS
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


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
       <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style='auto'/> 
     
    </Provider>
  );
}

const style = {
  headerShown: false
}


