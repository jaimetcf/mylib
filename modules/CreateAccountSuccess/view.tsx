import {
	CreateAccountSuccessContainerWrapper,
	CreateAccountSuccessWrapper,
	Title,
} from './styles'
import { IViewProps } from './types'
import React from 'react'
import ScreenWrapper from '../ScreenWrapper'
import ButtonPrimary from '../../shared/components/ButtonPrimary'

function CreateAccountSuccess(props: IViewProps): JSX.Element {
	const { handleGoToHome } = props

	return (
		<CreateAccountSuccessContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				<CreateAccountSuccessWrapper>
					<Title>Cadastro realizado com sucesso.</Title>
					<ButtonPrimary onPress={handleGoToHome}>Go to Home</ButtonPrimary>
				</CreateAccountSuccessWrapper>
			</ScreenWrapper>
		</CreateAccountSuccessContainerWrapper>
	)
}

export default CreateAccountSuccess
