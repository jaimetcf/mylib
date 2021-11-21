import { VALID_DDDS } from './constants'
import {
	IS_VALID_EMAIL,
	IS_VALID_PASSWORD,
	NON_DIGIT,
	ALL_SAME_NUMBER,
	SPECIAL_CHAR_AND_WHITESPACE,
} from './regexp'

export function checkEmail(email: string): boolean {
	return Boolean(email && email.length && IS_VALID_EMAIL.test(email))
}

export function checkPostalCode(postalCode: string): boolean {
	return Boolean(postalCode && postalCode.length && postalCode.length >= 8)
}

export function checkPassword(password: string): boolean {
	password = password.trim()

	const isValidPassword = IS_VALID_PASSWORD.test(password)

	const isTrue = password.length !== 0 && isValidPassword

	return isTrue
}

export function checkEmailMatch(email: string, emailCheck: string): boolean {
	const tEmail = email.trim()
	const tEmailCheck = emailCheck.trim()

	const areEqualAndNotEmpty =
		tEmail === tEmailCheck && tEmail.length !== 0 && tEmailCheck.length !== 0

	return areEqualAndNotEmpty
}

export function checkPasswordMatch(
	password: string,
	passwordCheck: string,
): boolean {
	const tPassword = password.trim()
	const tPasswordCheck = passwordCheck.trim()

	const areEqualAndNotEmpty =
		tPassword === tPasswordCheck &&
		tPassword.length !== 0 &&
		tPasswordCheck.length !== 0

	return areEqualAndNotEmpty
}

export function checkTel(telephone: string): boolean {
	const tel: any = telephone.replace(NON_DIGIT, '').trim()

	if (!tel) return false

	const telArr = [...tel]

	const ddd = telArr.slice(0, 2).join('')

	// Verifica se tem a quantidade de numero correto
	if (tel.length > 11 || tel.length < 10) return false

	if (tel.length === 11 && Number(telArr[2]) !== 9) {
		// Se celular verifica se começa com 9
		return false
	}

	if (ALL_SAME_NUMBER.test(tel)) return false

	return VALID_DDDS.includes(Number(ddd))
}

export function checkRG(s: any): boolean {
	let rg = s.replace(SPECIAL_CHAR_AND_WHITESPACE, '')

	return rg.length > 6
}

export function checkCNPJ(s: any): boolean {
	let cnpj = s.replace(/[^\d]+/g, '')

	// Valida a quantidade de caracteres
	if (cnpj.length !== 14) return false

	// Elimina inválidos com todos os caracteres iguais
	if (ALL_SAME_NUMBER.test(cnpj)) return false

	// Cáculo de validação
	let t = cnpj.length - 2,
		d = cnpj.substring(t),
		d1 = parseInt(d.charAt(0)),
		d2 = parseInt(d.charAt(1)),
		calc = (x: number) => {
			let n = cnpj.substring(0, x),
				y = x - 7,
				s = 0,
				r = 0

			for (let i = x; i >= 1; i--) {
				s += n.charAt(x - i) * y--
				if (y < 2) y = 9
			}

			r = 11 - (s % 11)
			return r > 9 ? 0 : r
		}

	return Boolean(calc(t) === d1 && calc(t + 1) === d2)
}

export function checkCPFCNPJ(documentNumber: string) {
	let documentCleaned = documentNumber.replace(/[^\d]+/g, '')

	if (documentCleaned.length === 11) {
		return checkCPF(documentNumber)
	} else if (documentCleaned.length === 14) {
		return checkCNPJ(documentNumber)
	} else {
		return false
	}
}

export function checkCPF(cpf: string): boolean {
	cpf = cpf.replace(SPECIAL_CHAR_AND_WHITESPACE, '').trim()

	if (cpf.length !== 11 || ALL_SAME_NUMBER.test(cpf)) {
		return false
	}

	// Valida 1o digito
	let add = 0
	for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i), 0) * (10 - i)
	let rev: number = 11 - (add % 11)
	if (rev === 10 || rev === 11) rev = 0
	if (rev !== parseInt(cpf.charAt(9), 0)) return false

	// Valida 2o digito
	add = 0
	for (let i = 0; i < 10; i++) {
		add += parseInt(cpf.charAt(i), 0) * (11 - i)
	}
	rev = 11 - (add % 11)
	if (rev === 10 || rev === 11) rev = 0
	if (rev !== parseInt(cpf.charAt(10), 0)) return false

	return true
}

export function checkString(value: string | undefined | null): boolean {
	return !!(value || '').trim()
}
