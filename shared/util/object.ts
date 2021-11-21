// TODO: Add to Lib and type better
export function clean<T>(obj: T): T {
	const newObj: any = {}

	for (const key in obj) {
		const element = obj[key]

		if (element) {
			newObj[key] = element
		}
	}

	return newObj
}
