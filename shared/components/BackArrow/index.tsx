import React from 'react'
import { Pressable, Text } from 'react-native'

import { backArrowStyles } from './styles'
import { IBackArrowProps } from './types'

//import ChevronLeft from '../../../assets/images/chevron-left.svg'
import { useStackNavigation } from '../../util/navigation.util'

export default function BackArrow({
	onPress,
	style,
	...rest
}: IBackArrowProps) {
	const navigation = useStackNavigation()
	const styles = backArrowStyles(rest)

	function handleGoBack() {
		navigation.goBack()
	}

	const handlePress = onPress ? onPress : handleGoBack

	return (
		<Pressable
			hitSlop={16}
			onPress={handlePress}
			{...rest}
			style={[styles.BackArrowWrapper, style]}
		>
			<Text>Voltar</Text>
		</Pressable>
	)
}
