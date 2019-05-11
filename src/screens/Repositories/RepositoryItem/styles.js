/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
	background: ${colors.white};
	border-radius: ${metrics.baseRadius};
	padding: ${metrics.basePadding}px;
	margin-horizontal: ${metrics.baseMargin * 2};
	margin-top: ${metrics.baseMargin};
`;

export const Title = styled.Text`
	font-size: 14;
	font-weight: bold;
`;

export const InfoContainer = styled.View`
	flex-direction: row;
	margin-top: ${metrics.baseMargin};
`;

export const Info = styled.View`
	flex-direction: row;
	margin-right: ${metrics.baseMargin};
	align-items: center;
`;

export const InfoText = styled.Text`
	color: ${colors.dark};
	font-size: 12;
	margin-left: ${metrics.baseMargin / 2};
`;
