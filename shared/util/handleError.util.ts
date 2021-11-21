import { APP_TEXT } from './appText'
import { logout } from './session'
import { toasterShowMessage } from './toaster'

interface IError {
	code: number
	message: string
}

function handleError(error: IError): void {
	// After update the server remove
	// const oldError = error.error

	if (process.env.NODE_ENV === 'development') {
		console.log('HANDLE_ERROR', { error })
	}

	if (
		error?.code &&
		(error?.code === 450 || error?.code === 400 || error?.code === 418)
	) {
		return
	}

	if (error?.code && error?.code === 401) {
		logout()

		toasterShowMessage(APP_TEXT.EXPIRED_SESSION)
		return
	}

	if (!error?.message) {
		toasterShowMessage(APP_TEXT.SERVER_UNAVAILABLE)
	}

	toasterShowMessage(error.message)
}

export default handleError
