export function findAspectRatio(width: number, height: number): number {
	return width / height
}

export function findNewHeight(newWidth: number, aspectRatio: number) {
	return newWidth / aspectRatio
}

export function findNewWidth(newHeight: number, aspectRatio: number) {
	return newHeight / aspectRatio
}
