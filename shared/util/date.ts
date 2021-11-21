import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	format,
	parseISO,
} from 'date-fns'

export function friendlyFormatDate(dateStr: string) {
	try {
		const date = parseISO(dateStr)
		const now = new Date()

		let text = ''
		const dateFormattedMinute = differenceInMinutes(now, date)
		const dateFormattedHour = differenceInHours(now, date)
		const dateFormattedDays = differenceInDays(now, date)

		if (dateFormattedMinute < 1) {
			text = `agora`
		} else if (dateFormattedMinute >= 1 && dateFormattedMinute <= 60) {
			text = `há ${dateFormattedMinute} min`
		} else if (dateFormattedHour === 1) {
			text = `há ${dateFormattedHour} hora`
		} else if (dateFormattedHour > 1 && dateFormattedHour <= 23) {
			text = `há ${dateFormattedHour} horas`
		} else if (dateFormattedDays === 1) {
			text = `há ${dateFormattedDays} dia`
		} else if (dateFormattedDays > 1 && dateFormattedDays < 7) {
			text = `há ${dateFormattedDays} dias`
		} else {
			text = `${format(date, "dd/MM/yyyy 'às' H:mm")}`
		}

		return text
	} catch (error) {
		return ''
	}
}
