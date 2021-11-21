import { createElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
//import { useDebounce } from 'use-debounce/lib'

import { Creators as TokenActions } from '../../shared/store/ducks/token'
import { Creators as UserActions } from '../../shared/store/ducks/user'
import { useStackNavigation } from '../../shared/util/navigation.util'
import { routesEnum } from '../../App'
import { createUser } from '../../shared/services/user.service'
import { checkEmail } from '../../shared/util/validators'
import { UserRoles } from '../../shared/interfaces/User'
import { CreateForm, IViewProps } from './types'
import CreateAccount from './view'

function CreateAccountContainer() {
	const [createForm, setCreateForm] = useState(new CreateForm())

	const [isLoading, setLoading] = useState(false)

	const [isDisabled, setDisabled] = useState(true)

	//	const [emailDebounce] = useDebounce(createForm.email, 1000)

	const navigation = useStackNavigation()
	const dispatch = useDispatch()

	function handleChangeForm(value: string, id: string) {
		let valueFormated = value

		if (id === 'name') {
			valueFormated = value
		}

		if (id === 'email') {
			valueFormated = value.trim()
		}

		if (id === 'password') {
			valueFormated = value.trim()
		}

		setCreateForm({ ...createForm, [id]: valueFormated })
	}

	function handleSubmit() {
		;(async () => {
			try {
				setLoading(true)

				const response = await createUser({
					name: createForm.name,
					email: createForm.email,
					photo: '',
					password: createForm.password,
					role: UserRoles.USER,
				})

				dispatch(TokenActions.setToken({ accessToken: response._id as string }))
				dispatch(
					UserActions.setUser({
						...response,
					}),
				)

				navigation.replace(routesEnum.CREATE_ACCOUNT_SUCCESS)
			} catch (error) {
			} finally {
				setLoading(false)
			}
		})()
	}

	useEffect(() => {
		const shouldDisable = !checkEmail(createForm.email) || !createForm.name

		setDisabled(shouldDisable)
	}, [createForm])

	const viewProps: IViewProps = {
		createForm,
		handleChangeForm,
		handleSubmit,
		isDisabled,
		isLoading,
	}

	return createElement(CreateAccount, viewProps)
}

export default CreateAccountContainer
