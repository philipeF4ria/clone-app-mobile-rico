import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-elements';

import {
	Container,
	ProfileUserArea,
	AvatarArea,
	AvatarText,
	TextName,
	ProfileMenuAccountArea,
	ProfileMenuAttendanceArea,
	ProfileMenu,
	ProfileMenuText,
} from './styles';

const Profile = () => (
	<Container>
		<ProfileUserArea>
			<AvatarArea>
				<AvatarText>PF</AvatarText>
			</AvatarArea>
			<TextName>Philipe Faria</TextName>
		</ProfileUserArea>
		<ProfileMenuAccountArea>
			<ProfileMenu>
				<ProfileMenuText>Conta Rico</ProfileMenuText>
				<Icon name="keyboard-arrow-right" size={22} color="#ff5300" />
			</ProfileMenu>
			<Divider style={{ backgroundColor: '#3f3e66', marginRight: 12, marginLeft: 12 }}/>
			<ProfileMenu>
				<ProfileMenuText>Histórico de termos</ProfileMenuText>
				<Icon name="keyboard-arrow-right" size={22} color="#ff5300" />
			</ProfileMenu>
		</ProfileMenuAccountArea>

		<ProfileMenu>
			<ProfileMenuText>Configurações</ProfileMenuText>
			<Icon name="keyboard-arrow-right" size={22} color="#ff5300" />
		</ProfileMenu>

		<ProfileMenuAttendanceArea>
			<ProfileMenu>
				<ProfileMenuText>Atendimento</ProfileMenuText>
				<Icon name="keyboard-arrow-right" size={22} color="#ff5300" />
			</ProfileMenu>
			<Divider style={{ backgroundColor: '#3f3e66', marginRight: 12, marginLeft: 12 }}/>
			<ProfileMenu>
				<ProfileMenuText>Envie seu feedback</ProfileMenuText>
			</ProfileMenu>
		</ProfileMenuAttendanceArea>

		<ProfileMenu>
			<ProfileMenuText>Sair</ProfileMenuText>
		</ProfileMenu>
	</Container>
);

export default Profile;
