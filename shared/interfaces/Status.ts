enum Status {
	'',
	PENDING,
	ACTIVE,
	INACTIVE,
	DELETED,
}

export type StatusEnum = keyof typeof Status
