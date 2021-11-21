import { Animated } from 'react-native'
import { Maybe } from '../interfaces/common'

export function interpolateThrough(
	outputRange: number[] | string[],
	animatedValue: Animated.Value,
	inputRange?: number[],
): Maybe<Animated.AnimatedInterpolation> {
	if (!animatedValue) return

	const config: Animated.InterpolationConfigType = {
		inputRange: inputRange || [0, 1],
		outputRange,
	}

	return animatedValue.interpolate(config)
}

export type InterpolateThroughType = (
	outputRange: [any, any],
	animatedValue: Animated.Value,
	inputRange?: [any, any],
) => Maybe<Animated.AnimatedInterpolation>
