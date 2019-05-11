/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
	height: ${54 + getStatusBarHeight()};
	border-bottom-width: 1;
	border-bottom-color: ${colors.light};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-horizontal: ${metrics.basePadding};
`;

export const Left = styled.View``;

export const Title = styled.Text`
	font-size: 16;
	font-weight: bold;
	color: ${colors.darker};
`;

export const Button = styled.TouchableOpacity``;
