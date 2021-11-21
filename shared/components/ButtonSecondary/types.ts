import { TouchableHighlightProps } from 'react-native'

export interface IButtonProps extends TouchableHighlightProps {
	children: React.ReactNode
	isLoading?: boolean
}
