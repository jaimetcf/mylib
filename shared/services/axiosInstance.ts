//import { store } from '../store'
import axios, { AxiosInstance } from 'axios'
import { store } from '../store'
import handleError from '../util/handleError.util'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: '',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Request-Headers': '*',
		'api-key':
			'nYZ5eExsrifgwz20rtagQgEyNEy1cUAyouIkOs8IvNR0rdUtkWiJrQdCY3QY9tIo',
	},
})

export const updateAxiosInstanceApi = (): void => {
	const { url } = store.getState().api

	axiosInstance.defaults.baseURL = `${url}`
}

axiosInstance.interceptors.request.use(
	(request) => {
		//		const accessToken: string = store.getState().token.accessToken
		//		const secret: string = store.getState().user._id
		//const accessToken =
		//	'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODkyMWJmNTlhYmY5NDUxOGY1MTBjNyIsImlhdCI6MTYzNjM5NzcwNSwiZXhwIjoxNjM2NDg0MTA1fQ.KBya7PGcF_88tozCDCg7vY3THZhZV9AFE45aVTfQFF5-V-1cfRGnsxMmFflbABv0vGCIciX3eM7gKcQxOfhmtw'
		//const secret = '618921bf59abf94518f510c7'

		//		if (accessToken) {
		//			request.headers.Authorization = `Bearer ${accessToken}`
		//		}

		//		if (secret) {
		//			request.headers.secret = secret
		//		}

		console.log(request)
		return request
	},
	(err) => {
		handleError(err?.request?.data)
		throw err?.request?.data
	},
)

axiosInstance.interceptors.response.use(
	(response) => {
		return response
	},
	(err) => {
		handleError(err?.response?.data)
		throw err?.response?.data
	},
)

export default axiosInstance
