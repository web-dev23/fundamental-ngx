/** Makes the provided type nullable */
export type Nullable<T> = T | null | undefined;

/** Makes each property of an object nullable */
export type NullableObj<T> = { [P in keyof T]?: Nullable<T[P]>; }
