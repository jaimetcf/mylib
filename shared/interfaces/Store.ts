import { Maybe } from './common'

import { IAPI } from './api'
import { IToken } from './token'
import { IUser } from './user'

export interface IStore {
	user: IUser
	api: IAPI
	token: IToken
}

export type SelectorEqualityFn<K extends keyof IStore> = Maybe<
	(left: Pick<IStore, K>, right: Pick<IStore, K>) => boolean
>
