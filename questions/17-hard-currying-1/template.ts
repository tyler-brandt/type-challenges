// version 1
// type curry<T extends (...args: any[]) => any> = T extends (...args: [infer Head, ...infer Tail]) => infer R
//   ?
//   Tail extends []
//     ? (arg: Head) => R
//     : (arg: Head) => curry<(...args: Tail) => R>
//   : never

// version 2
// declare function Currying<T>(fn: T): curry<T>
// type curry<T extends (...args: any[]) => any> = T extends (arg: infer Head, ...args: infer Tail) => infer R
//   ?
//   Tail extends []
//     ? (arg: Head) => R
//     : (arg: Head) => curry<(...args: Tail) => R>
//   : never

// declare function Currying<T>(fn: T): curry<T>

// version 3
type curry<T> = T extends (arg: infer Head, ...args: infer Tail) => infer R
  ?
  Tail extends []
    ? T
    : (arg: Head) => curry<(...args: Tail) => R>
  : never

declare function Currying<T>(fn: T): curry<T>
