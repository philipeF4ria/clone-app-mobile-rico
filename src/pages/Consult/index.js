import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-elements';

import logoImg from '../../assets/logo.png';

import {
	Container,
	Title,
	Description,
	CardAccount,
	CardAccountHeader,
	Image,
	CardAccountHeaderText,
	CardAccountFooter,
	CardAccountElements,
	CardAccountElementsText,
	TextInfoArea,
	TextInfo,
} from './styles';

const Consult = () => (
	<Container>
		<Title>Philipe, envie recursos para você começar a investir!</Title>
		<Description>Para isso, faça uma transferência bancária do tipo TED da mesma titularidade para os dados abaixo:</Description>
		<CardAccount>
			<CardAccountHeader>
				<Image source={logoImg} />
				<CardAccountHeaderText>Número / Nome da corretora</CardAccountHeaderText>
			</CardAccountHeader>
			<CardAccountFooter>
				<CardAccountElements>
					<CardAccountElementsText>Agência</CardAccountElementsText>
					<Icon name="content-copy" size={21} color="#ff5300" />
				</CardAccountElements>
				<Divider style={{ backgroundColor: '#3f3e66' }}/>
				<CardAccountElements>
				<CardAccountElementsText>Conta corrente</CardAccountElementsText>
					<Icon name="content-copy" size={21} color="#ff5300" />
				</CardAccountElements>
			</CardAccountFooter>
		</CardAccount>
		<TextInfoArea>
		<TextInfo>
			Informações sobre transferências bancárias
		</TextInfo>
		<Icon name="keyboard-arrow-right" size={22} color="#ff5300" />
		</TextInfoArea>
	</Container>
);

export default Consult;
