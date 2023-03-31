// Arithmetic

console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2); // quotient
console.log(10 % 2); // remainder
console.log(10 ** 2);

// Assignment 
let x = 10; // = operator assigns value from rhs to lhs
x += 9; // x = x + 9// x = 19
console.log(x);
x -= 9; // x = x - 9
console.log(x);
x *= 2; // x = x * 2
console.log(x);
x /= 5; // x = x / 5
console.log(x);
x **= 2; // x = x ** 2
console.log(x);
x %= 5; // x = x % 5;
console.log(x);

// comparison operator -> result of a comparison operator is always a boolean
let m = 9;
let n = 5;
console.log(m > n);
console.log(m >= n);
console.log(m < n);
console.log(m <= n);
// == , ===
console.log(m === n);

// logical operator -> and -> &&, or -> ||,  not -> !

console.log(false && true);
console.log(false || true);
console.log(10 && 9); // -> true && true -> true

console.log(0 && 5);

const r = 5 || 7;
console.log(r);

// 1 and 1 -> 1
// 1 and 0 -> 0
// 0 and 1 -> 0
// 0 and 0 -> 0

/**
 * 
 * 0 or 0 -> 0
 * 0 or 1 -> 1
 * 1 or 0 -> 1
 * 1 or 1 -> 1
 */

// bitwise operators

// a biwiseoperator b

// bitwise and -> &
// bitwise or -> |
// bitwise not -> ~
// bitwise xor -> ^

// 5 & 7 -> 101 & 111 -> now perform & operation bit by bit
/**
 *    1 0 1
 *  & 1 1 1
 * ---------
 *    1 0 1 -> 5
 */

console.log(5 & 7);
/**
 *    1 0 0 0
 *  | 0 1 0 1
 * -------------
 *    1 1 0 1
 *    
 */
console.log(8 | 5);