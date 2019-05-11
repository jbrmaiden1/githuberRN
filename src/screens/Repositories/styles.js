/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
	flex: 1;
	background: ${colors.lighter};
`;

export const Loading = styled.ActivityIndicator`
	margin-top: ${metrics.baseMargin * 2};
`;

export const RepoName = styled.Text``;

export const RepoList = styled.FlatList``;
