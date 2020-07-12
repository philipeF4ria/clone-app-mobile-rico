import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #00001d;
	padding: 20px;
`;

export const Title = styled.Text`
	font-family: 'Roboto-Light';
	font-size: 22px;
	color: #fff;
	margin: 14px 0 0 0;
`;

export const Description = styled.Text`
	font-family: 'Roboto-Regular';
	color: #8c8d9b;
	font-size: 16px;
	margin: 14px 0 14px 0;
`;

export const CardAccount = styled.View`
	background: #1d1c4b;
	width: 100%;
	height: 230px;
	border-radius: 6px;
	padding: 12px;

	justify-content: space-between;
`;

export const CardAccountHeader = styled.View`
	flex-direction: row;
`;

export const Image = styled.Image`
	width: 42px;
	height: 30px;
`;

export const CardAccountHeaderText = styled.Text`
	font-family: 'Roboto-Regular';
	font-size: 15px;
	color: #808194;
	margin: 0 0 0 8px;
`;

export const CardAccountFooter = styled.View`
	flex-direction: column;
`;

export const CardAccountElements = styled.View`
	flex-direction: row;
	justify-content: space-between;

	margin: 8px 0 8px 0;
`;

export const CardAccountElementsText = styled.Text`
	color: #a4a4b7;
`;

export const TextInfoArea = styled.View`
	flex-direction: row;
	margin-top: 8px;
`;

export const TextInfo = styled.Text`
	font-family: 'Roboto-Regular';
	font-size: 16px;
	color: #ff5300;
`;
