export interface IViewProps {
	createForm: CreateForm
	handleChangeForm(value: string, id: string): void
	handleSubmit(): void
	isDisabled: boolean
	isLoading: boolean
}

export class CreateForm {
	name: string
	password: string
	email: string
	photo: string

	constructor() {
		this.name = ''
		this.email = ''
		this.password = ''
		this.photo = ''
	}
}
