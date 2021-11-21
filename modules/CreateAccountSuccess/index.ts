import { createElement } from 'react'
import { routesEnum } from '../../App'
import {
	resetRouteTo,
	useStackNavigation,
} from '../../shared/util/navigation.util'

import { IViewProps } from './types'

import CreateAccountSuccess from './view'

function CreateAccountSuccessContainer() {
	const navigation = useStackNavigation()

	function handleGoToHome() {
		navigation.reset(resetRouteTo(routesEnum.HOME))
		setTimeout(() => {
			navigation.navigate(routesEnum.LOGIN)
		}, 0)
	}

	const viewProps: IViewProps = {
		handleGoToHome,
	}

	return createElement(CreateAccountSuccess, viewProps)
}

export default CreateAccountSuccessContainer
