import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import Header from '../../components/Header';
import styles, { Container, Loading, RepoList } from './styles';

import OrganizationItem from './OrganizationItem';

function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  const [helper, setHelper] = useState({ loading: true, refreshing: false });

  async function loadOrganizations() {
    setHelper({ loading: false, refreshing: true });
    const username = await AsyncStorage.getItem('@githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    setOrganizations(data);
    setHelper({ loading: false, refreshing: false });
  }

  function renderOrganizations({ item }) {
    return <OrganizationItem organization={item} />;
  }

  useEffect(() => {
    loadOrganizations();
  }, []);

  function renderList() {
    return (
      <RepoList
        data={organizations}
        keyExtractor={item => String(item.id)}
        renderItem={renderOrganizations}
        onRefresh={loadOrganizations}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        refreshing={helper.refreshing}
      />
    );
  }

  return (
    <Container>
      <Header title="Organizações" />
      {helper.loading ? <Loading /> : renderList()}
    </Container>
  );
}

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Organizations.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organizations;
