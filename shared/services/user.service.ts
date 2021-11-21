import bcrypt from 'react-native-bcrypt'

import axiosInstance, { updateAxiosInstanceApi } from './axiosInstance'
import { toasterShowMessage } from '../util/toaster'
import { IUser, UserRolesEnum, UserStatus } from '../interfaces/User'

const dbDataLocation = {
	dataSource: 'Cluster0',
	database: 'api',
	collection: 'users',
}

export interface ICreateUserPayload {
	name: string
	email: string
	photo?: string
	password: string
	role: UserRolesEnum
}
export async function createUser(payload: ICreateUserPayload): Promise<IUser> {
	updateAxiosInstanceApi()
	const user = await findUserByEmail(payload.email)
	if (user) {
		toasterShowMessage('Usuário já cadastrado')
		throw {
			...Error,
			code: 400,
		}
	}

	const hashedPassword = await hashPassword(payload.password)
	const response = await axiosInstance.post('/action/insertOne', {
		...dbDataLocation,
		document: {
			...payload,
			password: hashedPassword,
		},
	})

	return {
		_id: response.data.insertedId,
		...payload,
		password: undefined,
		status: UserStatus.ACTIVE,
	}
}

async function findUserByEmail(email: string): Promise<IUser | undefined> {
	updateAxiosInstanceApi()
	const response = await axiosInstance.post('/action/findOne', {
		...dbDataLocation,
		filter: {
			email: email,
		},
	})

	return response.data.document
}

async function hashPassword(password: string): Promise<string> {
	return new Promise((resolves, rejects) => {
		bcrypt.hash(password, 10, (error, hashed: string | undefined) => {
			if (hashed) {
				resolves(hashed)
			}

			rejects('')
		})
	})
}

interface ILoginPayload {
	email: string
	password: string
}
export async function userLogIn(payload: ILoginPayload): Promise<IUser> {
	updateAxiosInstanceApi()
	const hashedPassword = await hashPassword(payload.password)
	const response = await axiosInstance.post('/action/findOne', {
		...dbDataLocation,
		document: {
			...payload,
			password: hashedPassword,
		},
	})
	if (!response.data || !response.data.document) {
		toasterShowMessage('Usuário não encontrado. Crie sua conta, primeiro.')
		throw {
			...Error,
			code: 400,
		}
	}

	return {
		...response.data.document,
		password: undefined,
	}
}

interface IUpdateUserResponse {
	user: IUser
	token: string
}
export interface IUpdateUserPayload {
	name?: string
	email?: string
	photo?: string
}
export async function updateUser(
	userId: string,
	payload: IUpdateUserPayload,
): Promise<IUpdateUserResponse> {
	const response = await axiosInstance.patch(`/user/${userId}`, payload)

	return response.data.content
}

export interface IGetUsersPagePayload {
	pageIndex: number
	maxItemsInPage: number
	searchString?: string
	sort?: string
	order?: number
}
export interface IGetUsersPageResponse {
	pageIndex: number
	numberOfPages: number
	totalDocs: number
	pageContent: IUser[]
}
export async function getUsersPage(
	payload: IGetUsersPagePayload,
): Promise<IGetUsersPageResponse> {
	const response = await axiosInstance.post('/user/get-page', payload)

	return response.data.content
}
