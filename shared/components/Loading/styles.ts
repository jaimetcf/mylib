import { StyleSheet } from 'react-native'

export function loadingStyles() {
	return StyleSheet.create({
		LoadingWrapper: {
			height: 80,
			alignItems: 'center',
			justifyContent: 'center',
		},
		Loading: {
			height: 180,
		},
	})
}
