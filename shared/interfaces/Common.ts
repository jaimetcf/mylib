export declare type Maybe<T> = T | undefined

export declare type Nullable<T> = T | null

export declare type ValidPropType = string | number | symbol

export declare type TernaryReturn<
	Condition extends boolean,
	ReturnIfTrue,
	ReturnIfFalse
> = Condition extends true ? ReturnIfTrue : ReturnIfFalse
