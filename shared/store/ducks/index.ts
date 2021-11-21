import { Action, combineReducers, Reducer, ReducersMapObject } from 'redux'

import { IActionsCreators } from '../../interfaces/Action'
import { IStore } from '../../interfaces/store'
import user from './user'
import api from './api'
import token from './token'

const reducers: ReducersMapObject<IStore, Action<IActionsCreators>> = {
	token,
	user,
	api,
}

export const Reducers: Reducer = combineReducers(reducers)
