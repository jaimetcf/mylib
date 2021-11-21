import { Action, createStore, Reducer, Store } from 'redux'
import { Persistor, persistReducer, persistStore } from 'redux-persist'

import AsyncStorage from '@react-native-community/async-storage'

import { Reducers } from './ducks'
import { IStore } from '../interfaces/store'
import { IActionsCreators } from '../interfaces/Action'

const persistConfig = {
	key: 'dev.mylib',
	storage: AsyncStorage,
	whitelist: ['token', 'user', 'api'],
}

const persistedReducer: Reducer = persistReducer(persistConfig, Reducers)

export const store: Store<IStore, Action<IActionsCreators>> = createStore(
	persistedReducer,
)
export const persistor: Persistor = persistStore(store)
