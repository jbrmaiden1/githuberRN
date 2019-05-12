import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import Header from '../../components/Header';
import { Container, Loading, RepoList } from './styles';

import RepositoryItem from './RepositoryItem';

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [helper, setHelper] = useState({ loading: true, refreshing: false });

  async function loadRepositories() {
    setHelper({ loading: true, refreshing: true });
    const username = await AsyncStorage.getItem('@githuber:username');
    const { data } = await api.get(`/users/${username}/repos`);

    setRepos(data);
    setHelper({ loading: false, refreshing: false });
  }

  function renderRepo({ item }) {
    return <RepositoryItem repository={item} />;
  }

  useEffect(() => {
    loadRepositories();
  }, []);

  function renderList() {
    return (
      <RepoList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={renderRepo}
        onRefresh={loadRepositories}
        refreshing={helper.refreshing}
      />
    );
  }

  return (
    <Container>
      <Header title="Repositórios" />
      {helper.loading ? <Loading /> : renderList()}
    </Container>
  );
}

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
