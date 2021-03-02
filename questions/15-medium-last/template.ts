// recursive solution
// type Last<T extends any[]> = T extends [infer Head, ...infer Tail] ? Tail extends [] ? Head : Last<Tail> : never

// recursion not needed, we can just infer the final element
type Last<T extends any[]> = T extends [...infer _, infer Tail] ? Tail : never
