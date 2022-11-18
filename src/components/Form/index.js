import React, { useContext } from 'react';
import { Input } from '../Input';
import { Button } from '../Button/index';
import { Container,Content,SignMessageButton,SignMessageButtonText,SignMessageButtonTextBold } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Form() {
  const navigation = useNavigation();

  function handleUserRegister() {
    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <Content>
      <Input
          name="nome"
          icon="person"
          placeholder="Nome"
        />
        <Input
          name="email"
          icon="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize='none'
        />
        <Input
          name="senha"
          icon="lock-closed-sharp"
          placeholder="Senha"
          secureTextEntry
        />
        <Input
        name="ConfSenha"
        icon="lock-closed-sharp"
        placeholder="Confirme sua Senha"
        secureTextEntry
      />
        <Button
          title="Cadastrar"
          onPress={() =>handleUserRegister()}
        />
      </Content>
        <SignMessageButton onPress={() => handleUserRegister()} >
          <SignMessageButtonText>Já possui uma conta ?</SignMessageButtonText>
          <SignMessageButtonTextBold>Faça Login !</SignMessageButtonTextBold>
        </SignMessageButton>
    </Container>
  )
}