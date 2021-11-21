import { ITrendBadgeProps } from './types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export default function Chip({
	text,
	backgroundColor = colors.bottomBarBackground,
	fontColor = colors.grey,
	style,
}: ITrendBadgeProps) {
	const styles = StyleSheet.create({
		ChipWrapper: {
			paddingTop: 6,
			paddingRight: 12,
			paddingBottom: 6,
			paddingLeft: 12,
			borderRadius: 12,
			backgroundColor: backgroundColor,
			alignSelf: 'baseline',
		},
		Chip: {
			fontSize: 10,
			fontFamily: fonts.bold,
			textTransform: 'uppercase',
			color: fontColor,
			letterSpacing: 1.12,
		},
	})

	return (
		<View style={[styles.ChipWrapper, style]}>
			<Text style={styles.Chip}>{text}</Text>
		</View>
	)
}
