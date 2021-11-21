import IProps from './types'
import React, { useEffect } from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	View,
	Keyboard,
	Pressable,
} from 'react-native'
import { colors } from '../../shared/styles/colors'

import { KeyboardAvoidingView } from 'react-native'
import { isIOS } from '../../shared/util/device'

function ScreenWrapper({
	children,
	statusBarBackgroundColor = colors.primary,
	useScrollView = false,
	withBottomBar = false,
	refreshControl,
	insideTab = false,
}: IProps) {
	const styles = StyleSheet.create({
		SafeArea: {
			marginTop: !isIOS ? (insideTab ? 0 : 24) : 0,
			flex: 1,
		},
		KeyboardAvoindingView: { flex: 1 },
		hideKeyboard: { flex: 1 },
		ScrollView: { flex: 1 },
		NormalView: {
			flex: 1,
		},
	})

	function hideKeyboard() {
		Keyboard.dismiss()
	}

	return (
		<SafeAreaView style={styles.SafeArea}>
			<KeyboardAvoidingView
				style={styles.KeyboardAvoindingView}
				behavior={isIOS ? 'padding' : 'height'}
				keyboardVerticalOffset={0}
				// enabled
			>
				{useScrollView ? (
					<ScrollView style={styles.ScrollView} refreshControl={refreshControl}>
						<Pressable style={styles.hideKeyboard} onPress={hideKeyboard}>
							{children}
						</Pressable>
					</ScrollView>
				) : (
					<Pressable style={styles.hideKeyboard} onPress={hideKeyboard}>
						<View style={styles.NormalView}>{children}</View>
					</Pressable>
				)}
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

export default ScreenWrapper
