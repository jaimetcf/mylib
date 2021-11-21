//import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export const useStackNavigation = () =>
	useNavigation() as StackNavigationProp<any, any>

//export const useBottomBarNavigation = () =>
//	useNavigation() as BottomTabNavigationProp<any, any>

export const resetRouteTo = (routeName: string) => ({
	index: 0,
	routes: [{ name: routeName }],
})
