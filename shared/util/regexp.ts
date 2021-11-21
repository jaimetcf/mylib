export const NON_DIGIT = /\D/g
export const NON_LETTER_AND_DIGIT = /[^A-Za-z0-9]/g
export const ALL_SAME_NUMBER = /^(\d)\1+$/
export const IS_VALID_PASSWORD = /^(?=.*\d).{8,20}$/
export const SPECIAL_CHAR_AND_WHITESPACE = /[^\w\s]/gi
export const IS_VALID_EMAIL = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const MONEY_REGEX = /[R$,.]+/g
