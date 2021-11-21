import React from 'react'
import { resetRouteTo } from './navigation.util'

export const navigationRef: any = React.createRef()
import { StackActions } from '@react-navigation/native'

export function push(routeName: string, props?: any) {
	navigationRef.current?.dispatch(StackActions.push(routeName, props))
}

export function navigate(routeName: string, props?: any) {
	navigationRef.current?.navigate(routeName, props)
}

export function resetNavigation(routeName: string) {
	navigationRef.current?.reset(resetRouteTo(routeName))
}
