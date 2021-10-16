import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Provider, useSelector} from 'react-redux';

// theme
import {theme} from './src/infrastructure/theme'
import {ThemeProvider} from 'styled-components/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// fonts
import {useFonts as useNotoSans, NotoSans_700Bold, NotoSans_400Regular} from '@expo-google-fonts/noto-sans';
import {useFonts as useLato, Lato_400Regular, Lato_700Bold} from '@expo-google-fonts/lato';


// components
import {Navigation} from './src/infrastructure/navigation';

// redux
import {store} from './src/redux/store';

// firebase
import * as firebase from 'firebase';



// const isAndroid = Platform.OS === 'android'; // check which platform we are on.

const paperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#00A355',
        accent: '#00A355'
    }
};

// FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCV3vyO2IU0NBaMSmfB1EzARnZZAdGub5E",
    authDomain: "wekick-rn.firebaseapp.com",
    projectId: "wekick-rn",
    storageBucket: "wekick-rn.appspot.com",
    messagingSenderId: "870781304018",
    appId: "1:870781304018:web:e19bfe7adfe61a33c2c10b",
    measurementId: "G-0NYDRZMPCD"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); // only run this once. it tries to run multiple times due to hot reload in react native
}

// // FONTS
export default function App() {

    const [notoSansLoaded] = useNotoSans({NotoSans_400Regular, NotoSans_700Bold});

    const [latoLoaded] = useLato({Lato_400Regular, Lato_700Bold});

    if (!notoSansLoaded || !latoLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PaperProvider theme={paperTheme}>
                    <Navigation/>
                </PaperProvider>
            </ThemeProvider>
            <ExpoStatusBar style='auto'/>
        </Provider>
    );
}

