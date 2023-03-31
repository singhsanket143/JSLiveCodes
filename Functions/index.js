// write a piece of code that can download some data from a url, write it in a file and then upload it
// on another url

/**
 * 
 * Breakdown the task
 *  - write logic to download
 *  - write a logic to write in a file
 *  - write a logic to upload
 */


// DRY -> Don't repeat yourself
// -> functions -> simply a block of code, that has a piece of logic embedded into it, and we can use this
// piece of logic at multiple places by just calling the name of the function instead of copy pasting
// the logic again and again

// How can we create a function in JS ? 

/**
 * To create a function in JS, we just need to follow 3 simple steps:
 * 1. Decide a good name of the function using which we will actually refer the logic written in the function
 * 2. Declare a function using the following syntax:
 * 
 * function <name of the function> (x, y) {
 *      // logic of the function
 *      
 *      return <output>; 
 * }
 * 
 * in the above syntax, function is a keyword, JS will understand that we are declaring a new 
 * function definition. Then we have the name of the function. 
 * () -> parenthesis helps us to declare if any input is expected in the function
 * {} => the pair of curly braces help us to create a new block (block means collection of statements)
 * inside this block we actually write our logic to be embedded in the function
 * 
 * 
 * return keyword helps us to mention the output value of the function. It is not mandatory to use
 * return statement, because even if you dont return something, JS will return by default undefined.
 * 
 * y = f(x)
 */

// function declaration
function square(x) { // x -> parameters
    let result = x*x; 

    return result;
}

console.log(square(10)); // calls site  // 10 -> argument
console.log(square(11)); 
// HOF: A function that takes another function as an argument is called HOF.
// The function which takes another function as an argument is called HOF and the function that is passed
// as an argument to the HOF is called callback. 

