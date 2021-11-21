import { Creators as APIActions } from '../../shared/store/ducks/api'
import { Creators as TokenActions } from '../../shared/store/ducks/token'
import { Creators as UserActions } from '../../shared/store/ducks/user'

import { store } from '../store'
import * as RootNavigation from '../../shared/util/navigationRoot'
//import routesEnum from '../../modules/Navigation/enum'
import { routesEnum } from '../../App'

export function logout() {
	store.dispatch(TokenActions.resetToken())
	store.dispatch(UserActions.resetUser())

	// important reset to clean all timeouts on screen (This reset navigation cause umount and mount on AppWrapper)
	RootNavigation.resetNavigation(routesEnum.LOGIN)
}

export const handleChangeNextEnvAPIEasterEgg = () => {
	const api = store.getState().api

	const { type } = api
	const { setProd, setHomolog, setDev, setLocal } = APIActions

	if (type === 'PROD') {
		store.dispatch(setHomolog())
	} else if (type === 'HOMOLOG') {
		store.dispatch(setDev())
	} else if (type === 'DEV') {
		store.dispatch(setLocal())
	} else if (type === 'LOCAL') {
		store.dispatch(setProd())
	}
}
