import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce'
import {
	IActionsFromCreators,
	IAPIActionCreators,
} from '../../interfaces/Action'
import { IAPI } from '../../interfaces/api'

/**
 * Action types & creators
 */
export const { Types, Creators }: IActionsFromCreators<IAPIActionCreators> =
	createActions({
		setProd: [],
		setDev: [],
		setLocal: [],
	})

/**
 * Handlers
 */

const INITIAL_STATE: IAPI = {
	url: 'https://data.mongodb-api.com/app/data-vrosc/endpoint/data/beta',
	type: 'DEV',
}

const setProd = (state = INITIAL_STATE, action: any): IAPI => ({
	url: 'http://localhost:19999',
	type: 'PROD',
})

const setDev = (state = INITIAL_STATE, action: any): IAPI => ({
	url: 'https://data.mongodb-api.com/app/data-vrosc/endpoint/data/beta',
	type: 'DEV',
})
const setLocal = (state = INITIAL_STATE, action: any): IAPI => ({
	url: 'http://localhost:19999',
	type: 'LOCAL',
})

/**
 * Reducer
 */
export default createReducer<IAPI, Action<IAPIActionCreators>>(INITIAL_STATE, {
	[Types.SET_PROD]: setProd,
	[Types.SET_DEV]: setDev,
	[Types.SET_LOCAL]: setLocal,
})
