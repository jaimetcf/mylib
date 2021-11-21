import React, { useEffect, useState } from 'react'
import { Animated, Platform, TextInput, View } from 'react-native'
import { colors } from '../../../shared/styles/colors'

import { InputSearchStyles } from './styles'
import { IFloatLabelInputProps } from './types'
import { Search } from 'react-native-feather'
import { interpolateThrough } from '../../util/animated'

function InputSearch({
	value,
	label,
	style,
	...rest
}: IFloatLabelInputProps): JSX.Element {
	const [isFocused, setFocused] = useState(false)
	const [animatedValue, _] = useState<Animated.Value>(
		new Animated.Value(value ? 1 : 0),
	)

	const styles = InputSearchStyles({ value, label, style, ...rest })

	function handleOnBlur() {
		if (value?.length) return
		setFocused(false)
	}

	function handleOnFocus() {
		setFocused(true)
	}

	function handleUpdate(): void {
		if (!animatedValue) return

		Animated.timing(animatedValue, {
			toValue: isFocused || value ? 1 : 0,
			duration: 200,
			useNativeDriver: false,
		}).start()
	}

	const animatedStyles = {
		container: {
			borderColor: interpolateThrough(
				['#00000029', colors.darkGrey],
				animatedValue,
			),
		},
		label: {
			top: interpolateThrough(
				[Platform.OS === 'ios' ? 23 : 25, 8],
				animatedValue,
			),
			left: interpolateThrough([16, 16], animatedValue),
			fontSize: interpolateThrough([16, 10], animatedValue),
			color: interpolateThrough(
				[colors.darkGrey, colors.darkGrey],
				animatedValue,
			),
		},
	}

	useEffect(handleUpdate, [value, isFocused])

	return (
		<Animated.View
			style={[styles.AnimatedContainer, animatedStyles.container, style]}
		>
			<Animated.Text style={[styles.AnimatedLabel, animatedStyles.label]}>
				{label}
			</Animated.Text>

			<TextInput
				style={styles.Input}
				{...rest}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				blurOnSubmit
				value={value}
			/>

			<View style={styles.SearchIconWrapper}>
				<Search width={16} height={16} style={styles.SearchIcon} />
			</View>
		</Animated.View>
	)
}

export default InputSearch
