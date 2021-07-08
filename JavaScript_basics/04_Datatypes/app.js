// 7 Datatypes

// Primitive --> String, Number, Boolean, NUll, Undefined, Symbol
// Object    --> Arrays, Functions, Objects

// String
const text = 'hello!'

// Number
const number = 13

// Boolearn
const bool = true

// Null
const result = null 
//  This gives the o/p as object even though it's null. It is a bug ever since the begining and 
//  they won't fix it cause there is too much code relying on it.

// Undefined
let name; // Gives error if used with const

console.log(typeof text);
console.log(typeof number);
console.log(typeof bool);
console.log(typeof result);
console.log(typeof name);