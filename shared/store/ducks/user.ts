import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce'

import {
	IActionsFromCreators,
	IUserActionCreators,
} from '../../interfaces/action'
import { IUser, UserRoles, UserStatus } from '../../interfaces/User'

/**
 * Action types & creators
 */
export const { Types, Creators }: IActionsFromCreators<IUserActionCreators> =
	createActions({
		setUser: ['user'],
		resetUser: [],
	})

/**
 * Handlers
 */

export const INITIAL_STATE: IUser = {
	_id: '',
	name: '',
	email: '',
	photo: '',
	password: '',
	role: UserRoles.USER,
	status: UserStatus.ACTIVE,
}

const set = (state = INITIAL_STATE, action: any) => action.user
const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE

/**
 * Reducer
 */
export default createReducer<IUser, Action<IUserActionCreators>>(
	INITIAL_STATE,
	{
		[Types.SET_USER]: set,
		[Types.RESET_USER]: reset,
	},
)
