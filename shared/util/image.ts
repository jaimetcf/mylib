export const isImageValid = (imageUrl: string) => {
	const regex = /(http(s?):)([/|.=&?|\w|\s|-])*.(?:jpg|jpeg|png)/g
	return regex.test(imageUrl)
}
