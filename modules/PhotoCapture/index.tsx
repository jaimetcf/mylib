import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import {
	launchCamera,
	CameraOptions,
	ImagePickerResponse,
} from 'react-native-image-picker'

import ButtonPrimary from '../../shared/components/ButtonPrimary'
import { APP_TEXT } from '../../shared/util/appText'
import ScreenWrapper from '../ScreenWrapper'
import {
	EmptySpace12,
	PhotoCaptureContainerWrapper,
	PhotoCaptureWrapper,
} from './styles'

const cameraOptions: CameraOptions = {
	mediaType: 'photo',
	cameraType: 'front',
	saveToPhotos: true,
	includeBase64: true,
}

function PhotoCapture(): JSX.Element {
	const [image, setImage] = useState<ImagePickerResponse>({})

	async function takePhoto() {
		const response = await activateCamera()
		if (response.didCancel) return
		if (response.errorCode) {
			//			console.log('Error capturing photo => ', response.errorMessage)
			return
		}
		setImage(response)
	}

	useEffect(() => {
		takePhoto()
	}, [])

	function activateCamera(): Promise<ImagePickerResponse> {
		return new Promise((resolves, rejects) => {
			const getCameraResponse = (response: ImagePickerResponse) => {
				if (response.errorCode) rejects(response)
				resolves(response)
			}
			launchCamera(cameraOptions, getCameraResponse)
		})
	}

	return (
		<PhotoCaptureContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				<PhotoCaptureWrapper>
					<EmptySpace12 />
					<ButtonPrimary onPress={takePhoto} disabled={false} isLoading={false}>
						{APP_TEXT.HOME_PHOTO_PHOTO_BUTTON}
					</ButtonPrimary>
					<Image
						source={{ uri: image.uri, width: 360, height: 560 }}
						resizeMethod={'auto'}
					/>
				</PhotoCaptureWrapper>
			</ScreenWrapper>
		</PhotoCaptureContainerWrapper>
	)
}

export default PhotoCapture
