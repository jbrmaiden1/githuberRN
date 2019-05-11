import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../../styles';

import {
  Container, Title, InfoContainer, Info, InfoText,
} from './styles';

function RepositoryItem({ repository }) {
  return (
    <Container>
      <Title>{repository.full_name}</Title>
      <InfoContainer>
        <Info>
          <Icon name="start" size={12} color={colors.dark} />
          <InfoText>{repository.startgazers_count}</InfoText>
        </Info>

        <Info>
          <Icon name="code-fork" size={12} color={colors.dark} />
          <InfoText>{repository.forks_count}</InfoText>
        </Info>

        <Info>
          <Icon name="eye" size={12} color={colors.dark} />
          <InfoText>{repository.watchers_count}</InfoText>
        </Info>
      </InfoContainer>
    </Container>
  );
}

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    startgazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
