import { colors } from '../../shared/styles/colors'
import styled from 'styled-components/native'
import { fonts } from '../../shared/styles/fonts'

export const CreateAccountSuccessContainerWrapper = styled.ImageBackground.attrs(
	{
		source: require('../../assets/images/create-account-background.jpg'),
	},
)`
	flex: 1;
	align-items: stretch;
	//	background-color: ${colors.blueLight};
`

export const CreateAccountSuccessWrapper = styled.View`
	flex: 1;
	align-items: center;
	padding: 16px;
`
export const LogoWrapper = styled.View`
	justify-content: center;
	height: 150px;
`

export const Title = styled.Text`
	color: ${colors.white};
	font-size: 25px;
	font-family: ${fonts.heavy};
	letter-spacing: 0.25px;
	line-height: 25px;
	max-width: 65%;
	text-align: center;
	margin-bottom: 8px;
`

export const Subtitle = styled.Text`
	color: ${colors.white};
	font-size: 15px;
	font-family: ${fonts.regular};
	letter-spacing: 0.45px;
	text-align: center;
	line-height: 15px;
	max-width: 65%;
	margin-bottom: 80px;
`
