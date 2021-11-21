import Toast from 'react-native-root-toast'

export function toasterShowMessage(message: string) {
	if (!message) return

	Toast.show(message, {
		duration: 5000,
		position: -60,
		shadow: true,
		animation: true,
		hideOnPress: true,
		delay: 0,
		backgroundColor: 'black',
		textColor: 'white',
		keyboardAvoiding: true,
		containerStyle: {
			paddingTop: 16,
			paddingRight: 24,
			paddingLeft: 24,
			paddingBottom: 16,
			opacity: 1,
		},
		onShow: () => {
			// calls on toast\`s appear animation start
		},
		onShown: () => {
			// calls on toast\`s appear animation end.
		},
		onHide: () => {
			// calls on toast\`s hide animation start.
		},
		onHidden: () => {
			// calls on toast\`s hide animation end.
		},
	})
}
