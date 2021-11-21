import { TextProps } from 'react-native'

export interface IReactNativeFeatherProps extends TextProps {
	width?: number // Width of the icon.
	height?: number // Height of the icon.
	stroke?: string // The stroke prop refers to the color outline the icon.	"currentColor"
	strokeWidth?: number // The strokeWidth prop specifies the width of the outline on the icon.
	fill?: string // The fill prop refers to the color inside the icon.
}
