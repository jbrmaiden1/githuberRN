import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Left, Title, Button,
} from './styles';

function Header({ title, navigation }) {
  async function signOut() {
    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  }

  return (
    <Container>
      <Left />
      <Title>{title}</Title>
      <Button onPress={() => signOut()}>
        <Icon name="exchange" size={16} color="#666" />
      </Button>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
