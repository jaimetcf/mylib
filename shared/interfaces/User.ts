export interface IUser {
	_id?: string
	name: string
	email: string
	photo?: string
	password?: string
	role: UserRolesEnum
	status: UserStatusEnum
}

export enum UserRoles {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export enum UserStatus {
	ACTIVE = 'ACTIVE',
	PENDING = 'PENDING',
	DELETED = 'DELETED',
}

export const UserStatusValues = ['PENDING', 'ACTIVE', 'DELETED']
export const UserRoleValues = ['ADMIN', 'USER']

export type UserRolesEnum = keyof typeof UserRoles
export type UserStatusEnum = keyof typeof UserStatus
