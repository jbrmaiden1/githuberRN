/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
	flex: 1;
	background: ${colors.white};
	border-radius: ${metrics.baseRadius};
	padding: ${metrics.basePadding}px;
	margin-top: ${metrics.baseMargin};
	align-items: center;
	max-width: ${(metrics.screenWidth - 60) / 2};
`;

export const Title = styled.Text`
	font-size: 14;
	font-weight: bold;
	color: ${colors.darker};
	margin-top: ${metrics.baseMargin};
`;

export const Avatar = styled.Image`
	width: 50;
	height: 50;
`;
