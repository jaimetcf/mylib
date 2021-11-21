import { IBackArrowProps } from './types'
import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export function backArrowStyles(props: IBackArrowProps) {
	const {} = props

	return StyleSheet.create({
		BackArrowWrapper: {},
		ArrowImage: { color: colors.white },
	})
}
