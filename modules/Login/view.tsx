import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import {
	LoginContainerWrapper,
	LoginWrapper,
	FormWrapper,
	InputsWrapper,
	CreateAccountText,
	CreateAccountWrapper,
	FirstAccessText,
} from './styles'
import { IViewProps } from './types'
import ButtonPrimary from '../../shared/components/ButtonPrimary'
import FloatingLabelInputPrimary from '../../shared/components/FloatingLabelInputPrimary'
import ScreenWrapper from '../ScreenWrapper'
import { APP_TEXT } from '../../shared/util/appText'

function Login(props: IViewProps): JSX.Element {
	const {
		handleSubmit,
		isLoading,
		userLogin,
		isDisabled,
		handleChangeEmail,
		handleChangePassword,
		goToCreateAccount,
	} = props

	const { email, password } = userLogin
	return (
		<LoginContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				<LoginWrapper>
					<CreateAccountWrapper>
						<FirstAccessText>{APP_TEXT.LOGIN_FIRST_ACCESS}</FirstAccessText>
						<TouchableWithoutFeedback onPress={goToCreateAccount}>
							<CreateAccountText>
								{APP_TEXT.LOGIN_CREATE_ACCOUNT}
							</CreateAccountText>
						</TouchableWithoutFeedback>
					</CreateAccountWrapper>

					<FormWrapper>
						<InputsWrapper>
							<FloatingLabelInputPrimary
								label={APP_TEXT.INPUT_EMAIL_LABEL}
								value={email}
								onChangeText={handleChangeEmail}
								style={{ marginBottom: 16 }}
								autoCapitalize='none'
							/>
							<FloatingLabelInputPrimary
								label={APP_TEXT.INPUT_PASSWORD_LABEL}
								value={password}
								onChangeText={handleChangePassword}
								style={{ marginBottom: 30 }}
								autoCapitalize='none'
								secureTextEntry
							/>
						</InputsWrapper>

						<ButtonPrimary
							onPress={handleSubmit}
							disabled={false}
							isLoading={isLoading}
						>
							{APP_TEXT.LOGIN_BUTTON}
						</ButtonPrimary>
					</FormWrapper>
				</LoginWrapper>
			</ScreenWrapper>
		</LoginContainerWrapper>
	)
}

export default Login
