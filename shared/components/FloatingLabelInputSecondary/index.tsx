import React, { useEffect, useState } from 'react'
import {
	Animated,
	StyleProp,
	Text,
	TextInput,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native'
import { colors } from '../../styles/colors'

import { fonts } from '../../styles/fonts'

import { IFloatLabelInputProps } from './types'
import Loading from '../Loading'

import { interpolateThrough } from '../../util/animated'

function FloatingLabelInputSecondary({
	value,
	label,
	style,
	icon,
	isLoading = false,
	editable,
	infoMessage = '',
	errorMessage = '',
	isValid = true,
	...rest
}: IFloatLabelInputProps): JSX.Element {
	const [isFocused, setFocused] = useState(false)
	const [isBluried, setBluried] = useState(false)

	const [animatedValue, _] = useState<Animated.Value>(
		new Animated.Value(value ? 1 : 0),
	)

	// TODO: Type Properly
	const Icon: any = icon

	function handleOnBlur() {
		// if (!!value?.length) return
		setFocused(false)
		setBluried(true)
	}

	function handleOnFocus() {
		setFocused(true)
		setBluried(false)
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
					: interpolateThrough([colors.white, colors.secondary], animatedValue),

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
			backgroundColor: colors.darkGrey,
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
			color: editable === false ? colors.grey : colors.white,
		} as StyleProp<TextStyle>,
		Icon: {
			color: editable === false ? colors.grey : colors.lightPurple,
			position: 'absolute',
			right: 14,
			top: 16,
		},
		LoadingWrapper: {
			position: 'absolute',
			right: -60,
			top: -12,
		} as ViewStyle,
		InfoMessage: {
			color: colors.white,
			textTransform: 'uppercase',
			fontSize: 10,
			// lineHeight: 10,
			fontFamily: fonts.heavy,
			letterSpacing: 0.45,
			marginTop: 8,
		} as StyleProp<TextStyle>,
		ErrorMessage: {
			color: colors.error,
			textTransform: 'uppercase',
			fontSize: 10,
			// lineHeight: 10,
			fontFamily: fonts.heavy,
			letterSpacing: 0.45,
			marginTop: 8,
		} as StyleProp<TextStyle>,
	}

	useEffect(handleUpdate, [value, isFocused])

	return (
		<View style={style}>
			<Animated.View style={styles.AnimatedContainer}>
				<Animated.Text style={styles.AnimatedLabel}>{label}</Animated.Text>

				<TextInput
					style={styles.Input}
					{...rest}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					blurOnSubmit
					value={value}
					editable={editable}
				/>

				{isLoading ? (
					<View style={styles.LoadingWrapper}>
						<Loading />
					</View>
				) : (
					<>{Icon && <Icon style={styles.Icon} width={22} height={22} />}</>
				)}
			</Animated.View>

			{infoMessage && !isBluried && isFocused ? (
				<Text style={styles.InfoMessage}>{infoMessage}</Text>
			) : null}

			{errorMessage && !isValid && isBluried ? (
				<Text style={styles.ErrorMessage}>{errorMessage}</Text>
			) : null}
		</View>
	)
}

export default FloatingLabelInputSecondary
