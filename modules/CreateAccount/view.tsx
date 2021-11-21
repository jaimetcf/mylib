import {
	ButtonWrapper,
	CreateAccountContainerWrapper,
	CreateAccountWrapper,
	FormWrapper,
	InputWrapper,
	PageTitle,
} from './styles'
import { IViewProps } from './types'
//import BackArrow from '../../shared/components/BackArrow'
import ButtonPrimary from '../../shared/components/ButtonPrimary'
import FloatingLabelInputSecondary from '../../shared/components/FloatingLabelInputSecondary'
import React from 'react'
import ScreenWrapper from '../ScreenWrapper'

import { APP_TEXT } from '../../shared/util/appText'

function CreateAccount(props: IViewProps): JSX.Element {
	const { createForm, handleChangeForm, handleSubmit, isDisabled, isLoading } =
		props

	return (
		<CreateAccountContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				<CreateAccountWrapper>
					<PageTitle>{APP_TEXT.LOGIN_CREATE_ACCOUNT}</PageTitle>

					<FormWrapper>
						<InputWrapper>
							<FloatingLabelInputSecondary
								label={APP_TEXT.INPUT_NAME_LABEL_OBLIGATORY}
								value={createForm.name}
								onChangeText={(value) => handleChangeForm(value, 'name')}
								style={{ marginBottom: 16 }}
								autoCapitalize='none'
								// infoMessage='Obrigatório'
								// errorMessage='Este campo deve ser preenchido'
								// isValid={createForm.name.length > 0}
							/>
							<FloatingLabelInputSecondary
								label={APP_TEXT.INPUT_COMPANY_EMAIL_LABEL_OBLIGATORY}
								value={createForm.email}
								onChangeText={(value) => handleChangeForm(value, 'email')}
								style={{ marginBottom: 16 }}
								autoCapitalize='none'
								// infoMessage='Obrigatório'
								// errorMessage='Este campo deve ser preenchido corretamente'
								// isValid={UtilValidators.checkEmail(createForm.email)}
							/>
							<FloatingLabelInputSecondary
								label={APP_TEXT.INPUT_PASSWORD_LABEL}
								value={createForm.password}
								onChangeText={(value) => handleChangeForm(value, 'password')}
								style={{ marginBottom: 16 }}
								autoCapitalize='none'
								keyboardType='numbers-and-punctuation'
								secureTextEntry
								// infoMessage='Opcional'
								// keyboardType='numeric'
								// maxLength={12}
							/>
						</InputWrapper>
						<ButtonWrapper>
							<ButtonPrimary
								onPress={handleSubmit}
								disabled={isDisabled}
								isLoading={isLoading}
								style={{ marginTop: 40 }}
							>
								{APP_TEXT.CREATE_ACCOUNT_REGISTER_BUTTON}
							</ButtonPrimary>
						</ButtonWrapper>
					</FormWrapper>
				</CreateAccountWrapper>
			</ScreenWrapper>
		</CreateAccountContainerWrapper>
	)
}

export default CreateAccount

// 					<BackArrow style={{ marginTop: 26, marginBottom: 26 }} />
