import { Dimensions, Platform } from 'react-native'
import { findAspectRatio, findNewHeight } from './aspectRatio'

export const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width
export const isIOS = Platform.OS === 'ios'

export const deviceWidthMinusPadding = deviceWidth - 64
export const aspectRatio = findAspectRatio(311, 175) // Dimensions used in Design
export const videoHeight = findNewHeight(deviceWidthMinusPadding, aspectRatio)
