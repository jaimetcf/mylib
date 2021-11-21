export interface IAPI {
	url: string
	type: EnvTypesEnum
}

enum EnvTypes {
	DEV,
	PROD,
	LOCAL,
}

export type EnvTypesEnum = keyof typeof EnvTypes
