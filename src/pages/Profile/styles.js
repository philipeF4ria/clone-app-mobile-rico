import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #00001d;
`;

export const ProfileUserArea = styled.View`
	align-items: center;
	margin-top: 40px;
`;

export const AvatarArea = styled.View`
	width: 120px;
	height: 120px;
	border: 1px solid #fff;
	border-top-left-radius: 60px;
	border-top-right-radius: 60px;
	border-bottom-left-radius: 60px;
	border-bottom-right-radius: 60px;

	align-items: center;
	justify-content: center;
`;

export const AvatarText = styled.Text`
	font-family: 'Roboto-Regular';
	font-size: 32px;

	color: #fff;
`;

export const TextName = styled.Text`
	font-family: 'Roboto-Regular';
	font-size: 24px;
	color: #ffffff;
	margin-top: 16px;
`;

export const ProfileMenu = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	background: #0b0d28;
	height: 55px;
	padding: 16px;
`;

export const ProfileMenuText = styled.Text`
	font-family: 'Roboto-Regular';
	font-size: 16px;
	color: #716b84;
`;

export const ProfileMenuAccountArea = styled.View`
	margin: 8px 0 8px 0;
`;

export const ProfileMenuAttendanceArea = styled.View`
	margin: 8px 0 8px 0;
`;
