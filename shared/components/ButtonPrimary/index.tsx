import { IButtonProps } from './types'

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { buttonStyles } from './styles'
import Loading from '../Loading'

function ButtonPrimary({
	children,
	disabled,
	isLoading = false,
	...rest
}: IButtonProps) {
	const styles = buttonStyles({ children, disabled, ...rest })

	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={disabled ? 1 : 0.7}
			{...rest}
		>
			{isLoading ? (
				<Loading />
			) : (
				<View style={styles.ButtonWrapper}>
					<Text style={styles.ButtonText}>{children}</Text>
				</View>
			)}
		</TouchableOpacity>
	)
}

export default ButtonPrimary
