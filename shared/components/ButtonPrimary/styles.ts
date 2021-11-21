import { StyleSheet } from 'react-native'
import { colors } from '../../../shared/styles/colors'
import { fonts } from '../../styles/fonts'
import { IButtonProps } from './types'

export function buttonStyles(props: IButtonProps) {
	const { disabled } = props

	return StyleSheet.create({
		ButtonWrapper: {
			alignSelf: 'center',
			backgroundColor: disabled ? colors.grey : colors.blue,
			paddingTop: 18,
			paddingRight: 58,
			paddingBottom: 18,
			paddingLeft: 58,
			borderRadius: 32,
		},

		ButtonText: {
			color: disabled ? colors.darkGrey : colors.white,
			fontSize: 14,
			textAlign: 'center',
			fontFamily: fonts.semiBold,
			letterSpacing: 1,
			lineHeight: 14,
		},
	})
}
