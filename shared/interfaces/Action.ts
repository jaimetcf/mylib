import { IUser } from './User'
import { Action } from 'redux'
import { IToken } from './Token'

export interface IActionsCreators
	extends IUserActionCreators,
		IAPIActionCreators,
		ITokenActionCreators {}

export interface ITokenActionCreators {
	resetToken: () => Action<IActionsCreators>
	setToken: (token: IToken) => Action<IActionsCreators>
}

export interface IUserActionCreators {
	resetUser: () => Action<IActionsCreators>
	setUser: (user: IUser) => Action<IActionsCreators>
}

export interface IAPIActionCreators {
	setDev(): Action<IActionsCreators>
	setProd(): Action<IActionsCreators>
	setHomolog(): Action<IActionsCreators>
	setLocal(): Action<IActionsCreators>
}

export interface IActionsFromCreators<T> {
	Creators: T
	Types: any
}
