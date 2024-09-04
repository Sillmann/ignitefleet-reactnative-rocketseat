import { useState } from 'react';
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

  return (
    <Container source={backgroundImg}>
      
      <Title>
        Ignite Fleet
      </Title>

      <Slogan>
        Gestão de veículos
      </Slogan>

      <Button title="Entrar com Google" isLoading={isAuthenticating}/>

    </Container>

  );
}


