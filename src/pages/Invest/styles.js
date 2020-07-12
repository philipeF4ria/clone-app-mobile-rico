import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #00001d;
`;

export const TitleArea = styled.View`
	margin: 30px 0 0 14px;
`;

export const Title = styled.Text`
	color: #efeff0;
	font-size: 26px;
	font-family: 'Roboto-Bold';
`;

export const TitleSection = styled.Text`
	color: #e5e5e8;
	font-size: 20px;
	font-family: 'Roboto-Regular';

	margin: 20px 0 0 14px;
`;

export const AreaCards = styled.View`
	flex-direction: row;
	justify-content: space-around;

	margin: 10px 0 0 10px;
`;

export const CardSection = styled.View`
	width: 180px;
	height: 180px;
	padding: 20px;
	border-radius: 10px;

	align-items: center;
	justify-content: flex-end;

	background: ${props => props.cardBackgroundColor || '#3c10b9'};
`;

export const TextCardSection = styled.Text`
	color: #fff;
	font-family: 'Roboto-Bold';
	font-size: 17px;
`;
