import React from 'react';
import PropTypes from 'prop-types';

import { Container, Avatar, Title } from './styles';

function OrganizationItem({ organization }) {
  return (
    <Container>
      <Avatar source={{ uri: organization.avatar_url }} />
      <Title>{organization.login}</Title>
    </Container>
  );
}

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
