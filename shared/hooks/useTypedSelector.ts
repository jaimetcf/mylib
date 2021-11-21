import { useSelector } from 'react-redux'

import { IStore, SelectorEqualityFn } from '../interfaces/store'
import { pick } from 'ramda'

export function useTypedSelector<K extends keyof IStore>(
	props: Array<K>,
	equalityFn: SelectorEqualityFn<K> = undefined,
) {
	// TODO: Type Better
	const getState: any = pick(props)

	return useSelector<IStore, Pick<IStore, K>>(getState, equalityFn)
}
