import { colors } from '../../shared/styles/colors'
import styled from 'styled-components/native'
import { fonts } from '../../shared/styles/fonts'

export const CreateAccountContainerWrapper = styled.ImageBackground.attrs({
	source: require('../../assets/images/create-account-background.jpg'),
})`
	flex: 1;
	align-items: stretch;
	background-color: ${colors.blueLight};
`

export const CreateAccountWrapper = styled.View`
	flex: 1;
	padding: 16px;
`

export const PageTitle = styled.Text`
	color: ${colors.white};
	font-size: 24px;
	font-family: ${fonts.heavy};

	margin-bottom: 48px;
`

export const FormWrapper = styled.View`
	margin-bottom: 24px;
	align-self: stretch;
	border-radius: 4px;
`
export const InputWrapper = styled.View``

export const ButtonWrapper = styled.View``
