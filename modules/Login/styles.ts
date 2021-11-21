import { colors } from '../../shared/styles/colors'
import styled from 'styled-components/native'
import { fonts } from '../../shared/styles/fonts'

export const LoginContainerWrapper = styled.ImageBackground.attrs({
	source: require('../../assets/images/login-background.jpg'),
})`
	flex: 1;
	align-items: stretch;
	background-color: ${colors.grey};
`

export const LoginWrapper = styled.View`
	flex: 1;
	align-items: center;
	padding: 16px;
`

export const HeaderWrapper = styled.View`
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	flex: 1;
	padding: 0 16px;
`

export const CreateAccountWrapper = styled.View`
	margin-bottom: 26px;
	flex-direction: row;
	align-items: center;
`

export const FirstAccessText = styled.Text`
	color: ${colors.white};
	font-size: 12px;
	text-transform: uppercase;
	margin-right: 4px;
	font-family: ${fonts.medium};
	letter-spacing: 1.24px;
`
export const CreateAccountText = styled.Text`
	color: ${colors.secondary};
	font-size: 12px;
	text-transform: uppercase;
	font-family: ${fonts.medium};
	letter-spacing: 1.24px;
`

export const FormWrapper = styled.View`
	margin-bottom: 24px;
	align-self: stretch;
	border-radius: 4px;
`

export const InputsWrapper = styled.View``

export const LoadingWrapper = styled.View``
