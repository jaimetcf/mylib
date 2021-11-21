import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce'

import {
	IActionsFromCreators,
	ITokenActionCreators,
} from '../../interfaces/action'
import { IToken } from '../../interfaces/token'

/**
 * Action types & creators
 */
export const { Types, Creators }: IActionsFromCreators<ITokenActionCreators> =
	createActions({
		setToken: ['token'],
		resetToken: [],
	})

/**
 * Handlers
 */

export const INITIAL_STATE: IToken = {
	accessToken: '',
}

const set = (state = INITIAL_STATE, action: any) => action.token
const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE

/**
 * Reducer
 */
export default createReducer<IToken, Action<ITokenActionCreators>>(
	INITIAL_STATE,
	{
		[Types.SET_TOKEN]: set,
		[Types.RESET_TOKEN]: reset,
	},
)
