import React, { useEffect, useState } from 'react'
import {
	Animated,
	StyleProp,
	TextInput,
	TextStyle,
	ViewStyle,
} from 'react-native'
import { colors } from '../../../shared/styles/colors'

import { fonts } from '../../styles/fonts'
import { interpolateThrough } from '../../util/animated'

import { IFloatLabelInputProps } from './types'

function FloatingLabelInputPrimary({
	value,
	label,
	style,
	icon,
	editable,
	...rest
}: IFloatLabelInputProps): JSX.Element {
	const [isFocused, setFocused] = useState(false)
	const [animatedValue, _] = useState<Animated.Value>(
		new Animated.Value(value ? 1 : 0),
	)

	// TODO: Type Properly
	const Icon: any = icon

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

	const styles = {
		AnimatedLabel: {
			left: interpolateThrough([16, 16], animatedValue),
			top: interpolateThrough([19, 8], animatedValue),
			fontSize: interpolateThrough([14, 10], animatedValue),

			color:
				editable === false
					? colors.grey
					: interpolateThrough([colors.primary, colors.primary], animatedValue),

			position: 'absolute',
			fontFamily: fonts.regular,
			letterSpacing: 0.45,

			// IOS and Android have diferent lineHeight
			lineHeight: 16,
		} as TextStyle,

		AnimatedContainer: {
			position: 'relative',
			color: colors.primary,
			height: 56,
			width: '100%',
			backgroundColor: colors.white,
			borderRadius: 3,
		} as ViewStyle,
		Input: {
			flex: 1,
			paddingTop: 16,
			paddingRight: 40,
			paddingBottom: 0,
			paddingLeft: 16,
			height: 16,
			margin: 0,
			fontSize: 16,

			fontFamily: fonts.regular,
			color: editable === false ? colors.grey : colors.darkGrey,
		} as StyleProp<TextStyle>,
		Icon: {
			color: editable === false ? colors.grey : colors.lightPurple,
			position: 'absolute',
			right: 14,
			top: 16,
		},
	}

	useEffect(handleUpdate, [value, isFocused])

	return (
		<Animated.View style={[styles.AnimatedContainer, style]}>
			<Animated.Text style={[styles.AnimatedLabel]}>{label}</Animated.Text>

			<TextInput
				style={styles.Input}
				{...rest}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				blurOnSubmit
				value={value}
				editable={editable}
			/>

			{Icon && <Icon style={styles.Icon} width={22} height={22} />}
		</Animated.View>
	)
}

export default FloatingLabelInputPrimary
