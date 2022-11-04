import React, { useContext } from 'react';

import { Input } from '../Input';
import { Button } from '../Button/index';

import { Container, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold, Content } from './styles';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export function FormIn() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  function handleUserRegister() {
    signIn();
  }
  
  return (
    <Container>
      <Content>
        <Input
          name="email"
          icon="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize='none'
        />
        <Input
          name="senha"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
        />
        <Button
          title="Entrar"
          onPress={handleUserRegister}
        />
      </Content>
        <SignMessageButton onPress={() => navigation.navigate('SignUp')} >
          <SignMessageButtonText>Ainda não possui uma conta ?</SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
    </Container>
  )
}