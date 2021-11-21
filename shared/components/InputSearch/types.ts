import { Animated, StyleProp, TextInputProps, ViewStyle } from 'react-native'
import { Maybe } from '../../interfaces/common'

export interface IFloatLabelInputProps extends TextInputProps {
	label: string
	style?: StyleProp<ViewStyle>
	onPress?: () => void
}
