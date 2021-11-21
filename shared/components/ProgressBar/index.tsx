import React, { useEffect, useState } from 'react'
import { Animated, View, ViewStyle } from 'react-native'
import { colors } from '../../styles/colors'

import { IProgressBarProps } from './types'

const ProgressBar = ({ value = 0, style }: IProgressBarProps) => {
	const [animatedValue, _] = useState<Animated.Value>(new Animated.Value(value))

	function handleUpdate(): void {
		if (!animatedValue) return

		Animated.timing(animatedValue, {
			toValue: value,
			duration: 500,
			useNativeDriver: false,
		}).start()
	}

	useEffect(handleUpdate, [value])

	const styles = {
		ProgressBarWrapper: {
			width: '100%',
			height: 4,
			backgroundColor: colors.bottomBarBackground,
			borderRadius: 2,
		} as ViewStyle,
		Bar: {
			width: animatedValue.interpolate({
				inputRange: [0, 100],
				outputRange: ['0%', '100%'],
			}),
			height: 4,
			backgroundColor: colors.secondary,
		},
	}

	return (
		<View style={[styles.ProgressBarWrapper, style]}>
			<Animated.View style={styles.Bar} />
		</View>
	)
}

export default ProgressBar
