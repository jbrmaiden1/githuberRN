import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container, Title, Text, Form, Input, Button, ButtonText,
} from './styles';

const Welcome = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <Title>Bem vindo</Title>
    <Text>Para continuar, informe suas credenciais</Text>

    <Form>
      <Input />

      <Button>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Form>
  </Container>
);

export default Welcome;
