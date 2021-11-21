import { RefreshControl, RefreshControlProps } from 'react-native'

export default interface IProps {
	children: JSX.Element
	statusBarBackgroundColor?: string
	useScrollView?: boolean
	withBottomBar?: boolean
	refreshControl?: React.ReactElement<RefreshControlProps>
	insideTab?: boolean
}
