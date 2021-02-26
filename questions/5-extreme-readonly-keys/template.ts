
// this totally does not work at all
type GetReadonlyKeys<T> = {
  [K in keyof T]: K extends readonly any ? K : never
}[keyof T]
