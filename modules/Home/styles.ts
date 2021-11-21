import styled from 'styled-components/native'

import { colors } from '../../shared/styles/colors'

export const HomeContainerWrapper = styled.ImageBackground.attrs({
	source: require('../../assets/images/app-background.png'),
})`
	flex: 1;
	align-items: stretch;
	background-color: ${colors.blueLight};
`

export const HomeWrapper = styled.View`
	flex: 1;
	align-items: center;
	padding: 16px;
`

export const EmptySpace12 = styled.View`
	margin-bottom: 12px;
`

export const EmptySpace24 = styled.View`
	margin-bottom: 24px;
`
