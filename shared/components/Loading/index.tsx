import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'

import { loadingStyles } from './styles'

export default function Loading() {
	const styles = loadingStyles()

	return (
		<View style={styles.LoadingWrapper}>
			<LottieView
				style={styles.Loading}
				source={require('../../../assets/animations/lf30_editor_g8ppnrdw.json')}
				autoPlay
				loop
				speed={2.5}
			/>
		</View>
	)
}
