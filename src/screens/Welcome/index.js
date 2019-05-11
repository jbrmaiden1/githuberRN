import React, { useState } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Title,
  Text,
  Form,
  Input,
  Button,
  ButtonText,
  Loading,
  ErrorText,
} from './styles';

export default function Welcome({ navigation }) {
  const [username, setUsername] = useState('');
  const [helper, setHelper] = useState({ loading: false, error: false });

  async function saveUser() {
    await AsyncStorage.setItem('@githuber:username', username);
  }

  async function checkUserExists() {
    const user = await api.get(`/users/${username}`);

    return user;
  }

  async function signIn() {
    setHelper({ loading: true, error: false });
    try {
      await checkUserExists();
      await saveUser();

      navigation.navigate('Repositories');
    } catch (err) {
      setHelper({ loading: false, error: true });
      console.tron.log('Usuario não existe');
    }
  }

  function handleInput(text) {
    setUsername(text);
  }

  console.tron.log(helper);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Title>Bem vindo</Title>
      <Text>Para continuar, informe suas credenciais</Text>

      {helper.error ? <ErrorText> Usuário inexistente</ErrorText> : null}

      <Form>
        <Input onChangeText={text => handleInput(text)} value={username} />

        <Button onPress={() => signIn()}>
          {helper.loading ? <Loading size="small" color="#FFF" /> : <ButtonText>Entrar</ButtonText>}
        </Button>
      </Form>
    </Container>
  );
}
