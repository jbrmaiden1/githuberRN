/* eslint-disable no-tabs */
import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
});

export default styles;
