import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'react-native';
import { AppProvider, UserProvider } from '@realm/react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { ANDROID_CLIENT_ID, REALM_APP_ID } from '@env';

import { Signin } from './src/screens/Signin';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  console.log( ANDROID_CLIENT_ID);
  
  if (!fontsLoaded) {
    return (
      <Loading/>
    )
  }
  return (

    <AppProvider id={REALM_APP_ID}>

      <ThemeProvider theme={theme}>
        
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent
        />

        {/* <Signin /> */}

        <UserProvider fallback={Signin}>
          <Home />
        </UserProvider>

      </ThemeProvider>

    </AppProvider>
  );
}