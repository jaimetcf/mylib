import { createElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Creators as TokenActions } from '../../shared/store/ducks/token'
import { Creators as UserActions } from '../../shared/store/ducks/user'
import { checkEmail } from '../../shared/util/validators'
import { useStackNavigation } from '../../shared/util/navigation.util'
import { routesEnum } from '../../App'
import { userLogIn } from '../../shared/services/user.service'
import { IViewProps } from './types'
import Login from './view'

function LoginContainer() {
	const navigation = useStackNavigation()
	const dispatch = useDispatch()

	const [isLoading, setLoading] = useState(false)
	const [isDisabled, setDisabled] = useState(true)
	const [userLogin, setUserLogin] = useState({
		email: '',
		password: '',
	})

	//	const validStoredUser = !!user?._id && !!token?.accessToken

	function handleSubmit() {
		;(async () => {
			try {
				setLoading(true)
				const response = await userLogIn({
					email: userLogin.email,
					password: userLogin.password,
				})

				dispatch(TokenActions.setToken({ accessToken: response._id as string }))
				dispatch(
					UserActions.setUser({
						...response,
					}),
				)

				navigation.navigate(routesEnum.HOME)
			} catch (error) {
			} finally {
				setLoading(false)
			}
		})()
	}

	useEffect(() => {
		const shouldDisable =
			!checkEmail(userLogin.email) || userLogin.password.length > 6

		setDisabled(shouldDisable)
	}, [userLogin])

	function handleChangeEmail(value: string) {
		setUserLogin({ ...userLogin, email: value.trim() })
	}

	function handleChangePassword(value: string) {
		const valueUppercase = value.toUpperCase()
		setUserLogin({ ...userLogin, password: valueUppercase.trim() })
	}

	function goToCreateAccount() {
		navigation.navigate(routesEnum.CREATE_ACCOUNT)
	}

	const handleChangeAPI = () => {
		//		handleChangeNextEnvAPIEasterEgg()
	}

	const viewProps: IViewProps = {
		handleSubmit,
		isLoading,
		userLogin,
		isDisabled,
		handleChangeEmail,
		handleChangePassword,
		handleChangeAPI,
		goToCreateAccount,
	}

	return createElement(Login, viewProps)
}

export default LoginContainer
