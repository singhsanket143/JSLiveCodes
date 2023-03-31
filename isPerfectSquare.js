// Given a number x, check if x is a parfect square or not ?
// Ex: x = 25
// ans : yes

// ex: x = 39
// ans = no

// A perfect square is a number that can be represented as a square of another number integer.

// 25 => 5*5
// 36 => 6*6


// x => floor(root(x)) * floor(root(x))

// Math.sqrt(x) -> y.zz -> 4.13
// Math.floor(Math.sqrt(x)) -> y -> 4
let x = 60;
let y = Math.floor(Math.sqrt(x)); // 7
if(y ** 2 == x) {
    console.log("yes");
} else {
    console.log("no")
}