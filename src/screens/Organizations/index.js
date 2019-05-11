import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

// import { Container } from './styles';

function Organization() {
  return (
    <View>
      <Header title="Organizações" />
    </View>
  );
}

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Organization.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organization;
