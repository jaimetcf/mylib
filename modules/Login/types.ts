export default interface IProps {}

interface IViewUser {
	email: string
	password: string
}
export interface IViewProps {
	handleSubmit: () => void
	isLoading: boolean
	userLogin: IViewUser
	isDisabled: boolean
	handleChangeEmail(value: string): void
	handleChangePassword(value: string): void
	handleChangeAPI(): void
	goToCreateAccount(): void
}
