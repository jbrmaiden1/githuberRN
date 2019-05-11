/* eslint-disable no-tabs */
import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';

export const Container = styled.View`
	flex: 1;
	background: ${colors.secondary};
	padding: ${metrics.basePadding * 2}px;
	justify-content: center;
	align-items: stretch;
`;

export const Form = styled.View`
	margin-top: ${metrics.baseMargin * 2};
`;

export const Title = styled.Text`
	text-align: center;
	color: ${colors.white};
	font-size: 24;
	font-weight: bold;
`;

export const Text = styled.Text`
	text-align: center;
	margin-top: ${metrics.baseMargin};
	font-size: 15;
	color: ${colors.light};
	line-height: 21;
`;

export const ErrorText = styled.Text`
	text-align: center;
	margin-top: ${metrics.baseMargin};
	font-size: 15;
	color: ${colors.danger};
	line-height: 21;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  placeholder: 'Digite seu usuário',
  underlineColorAndroid: 'transparent',
})`
	background: ${colors.white};
	border-radius: ${metrics.baseRadius};
	height: 44;
	padding-horizontal: ${metrics.basePadding};
`;

export const Button = styled.TouchableOpacity`
	background: ${colors.primary};
	border-radius: ${metrics.baseRadius};
	height: 44;
	margin-top: ${metrics.baseMargin};
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	color: ${colors.white};
	font-weight: bold;
	font-size: 15;
`;

export const Loading = styled.ActivityIndicator``;
