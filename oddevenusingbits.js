// Q: Given a number x, check if it is even or odd using bitwise operators only. 
// Ex: x = 7
// ans. -> odd

// Ex: x = 8
// ans. -> even

/**
 * 
 * 
 * 0 - 0000
 * 1 - 0001
 * 2 - 0010
 * 3 - 0011
 * 4 - 0100
 * 5 - 0101
 * 6 - 0110
 * 7 - 0111
 * 8 - 1000
 */

// if we can check that the last bit of the given number is 0 or 1 then we can decide
// if the last bit is 0 -> even, last bit is 1 -> odd

/**
 * // if you do bitwise and with 1, then in the ans except the last bit everything is 0
 * 5 - 101
 * 5 & 1 -> 1
 * 
 *    1 0 1 -> odd
 *  & 0 0 1
 * ----------
 *    0 0 1
 * 
 * 6 & 1 -> 0
 * 
 *    1 1 0 -> even
 *  & 0 0 1
 * ---------
 *    0 0 0
 * 
 * 
 * 
 */

let x = 5;
if((x & 1)) {
    console.log("Odd");
} else {
    console.log("even");
}