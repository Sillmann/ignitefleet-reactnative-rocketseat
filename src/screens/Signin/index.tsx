import { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Title, Slogan } from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

import { WEB_CLIENT_ID } from "@env";



GoogleSignin.configure({
  scopes: ['email','profile'],
  webClientId:WEB_CLIENT_ID,
})


export function Signin() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);
      // const response = await GoogleSignin.signIn();
      // console.log(response);

      const { idToken } = await GoogleSignin();

      if (idToken) {

      } else {
        Alert.alert("Entrar","Não foi possível conectar-se a sua conta google.")
        setIsAuthenticating(false);
      }

    } catch (error) {
      console.log(error);
      Alert.alert("Entrar","Não foi possível conectar-se a sua conta google.")
      setIsAuthenticating(false);
    }

  }

  return (
    <Container source={backgroundImg}>
      
      <Title>
        Ignite Fleet
      </Title>

      <Slogan>
        Gestão de veículosss
      </Slogan>

      <Button 
        title="Entrar com Google" 
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />

    </Container>

  );
}


