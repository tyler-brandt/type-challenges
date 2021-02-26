// this is the cool kid recursive solution
// type TupleToUnion<T extends readonly unknown[]> = T extends [infer Head, ...infer Tail] ? Head | TupleToUnion<Tail> : never

type TupleToUnion<T extends readonly unknown[]> = T[number]
