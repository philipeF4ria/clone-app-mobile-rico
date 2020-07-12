import React from 'react';
import { StatusBar } from 'react-native';

import {
	Container,
	TitleArea,
	Title,
	TitleSection,
	AreaCards,
	CardSection,
	TextCardSection
} from './styles';

const Invest = () => (
	<Container>
		<StatusBar backgroundColor="#00001d" />
		<TitleArea>
			<Title>No que você</Title>
			<Title>deseja investir hoje?</Title>
		</TitleArea>
		<TitleSection>Recomendado para você</TitleSection>
		<AreaCards>
			<CardSection cardBackgroundColor="#ef4c2e">
				<TextCardSection>Fundos de Investimentos</TextCardSection>
			</CardSection>
			<CardSection cardBackgroundColor="#ff8e05">
				<TextCardSection>Renda Variável</TextCardSection>
			</CardSection>
		</AreaCards>

		<TitleSection>Outros perfis de investimento</TitleSection>
		<AreaCards>
			<CardSection cardBackgroundColor="#3c10b9">
				<TextCardSection>Tesouro Direto</TextCardSection>
			</CardSection>
			<CardSection cardBackgroundColor="#24235b">
				<TextCardSection>Renda Fixa</TextCardSection>
			</CardSection>
		</AreaCards>
	</Container>
);

export default Invest;

