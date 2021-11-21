import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useTypedSelector } from '../../shared/hooks/useTypedSelector'
import { APP_TEXT } from '../../shared/util/appText'
import ButtonPrimary from '../../shared/components/ButtonPrimary'
import ScreenWrapper from '../ScreenWrapper'
import { routesEnum } from '../../App'
import {
	EmptySpace12,
	EmptySpace24,
	HomeContainerWrapper,
	HomeWrapper,
} from './styles'

function Home(): JSX.Element {
	const { user, api, token } = useTypedSelector(['user', 'api', 'token'])

	const navigation = useNavigation()

	function goToPhotoCapture() {
		navigation.navigate(routesEnum.PHOTO_CAPTURE)
	}

	function goToLogin() {
		navigation.goBack()
	}

	return (
		<HomeContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				<HomeWrapper>
					<EmptySpace12 />
					<ButtonPrimary
						onPress={goToPhotoCapture}
						disabled={false}
						isLoading={false}
					>
						{APP_TEXT.HOME_PHOTO_PHOTO_BUTTON}
					</ButtonPrimary>
					<EmptySpace24 />
					<ButtonPrimary onPress={goToLogin} disabled={false} isLoading={false}>
						{APP_TEXT.HOME_PHOTO_LOGIN_BUTTON}
					</ButtonPrimary>
				</HomeWrapper>
			</ScreenWrapper>
		</HomeContainerWrapper>
	)
}

export default Home
