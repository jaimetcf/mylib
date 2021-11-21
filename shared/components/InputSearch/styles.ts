import { Platform, StyleSheet } from 'react-native'

import { IFloatLabelInputProps } from './types'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export function InputSearchStyles(props: IFloatLabelInputProps) {
	const {} = props

	return StyleSheet.create({
		AnimatedContainer: {
			position: 'relative',
			borderWidth: StyleSheet.hairlineWidth,
			borderStyle: 'solid',
			display: 'flex',
			width: '100%',
			backgroundColor: colors.white,
		},
		AnimatedLabel: {
			position: 'absolute',
			// fontFamily: fonts.medium,
		},
		Input: {
			flex: 1,
			paddingTop: 26,
			paddingRight: 64,
			paddingBottom: 22,
			paddingLeft: 16,
			margin: 0,
			fontSize: 16,
			// fontFamily: fonts.regular,
		},
		SearchIconWrapper: {
			backgroundColor: colors.darkGrey,
			padding: 14,
			position: 'absolute',
			right: 12,
			top: Platform.OS === 'ios' ? 11.5 : 16,
			borderRadius: 2,
		},
		SearchIcon: { color: colors.white },
	})
}
