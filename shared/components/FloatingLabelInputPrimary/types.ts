import { FC } from 'react'
import { StyleProp, TextInputProps, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

export interface IFloatLabelInputProps extends TextInputProps {
	label: string
	style?: StyleProp<ViewStyle>
	icon?: FC<SvgProps>
}
