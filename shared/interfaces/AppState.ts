export type AppState = keyof typeof AppStateTypes

enum AppStateTypes {
	'',
	'active',
	'background',
	'foreground',
	'inactive',
	'unknown',
	'extension',
}
