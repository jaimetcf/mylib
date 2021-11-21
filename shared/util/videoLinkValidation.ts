export function isYoutubeVideo(url: string) {
	if (!url) return ''
	const v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

	return url.match(v) ? RegExp.$1 : ''
}
