Whenever we call a function in the memory it gets added to a stack trace. 

## REPL Console of JS

- REPL -> Read Evaluate Print Loop
    - Read -> Read a valid command from the user
    - Evaluate -> Whatever command user gave evaluate that and execute it
    - Print -> Whatever is the result of the evaluation in prev step, print that result
    - Loop -> Repeat the process

Whenever we actually execute any valid JS code in browser, then we are executing it with a REPL console. 
That means, whenever we write a command, it reads it, evaluates it and then print the return value of it. 

Now with `console.log` the return value is undefined. So when we try to print anything in the browser using `console.log` then at last we get an undefined printed for us. 

This doesn't happen when you actually execute something in VSCode or by embedding JS file in a index file. 
When code is executed with VScode it is not the JS repl console. So whatever output we print only that much is shown in vscode.

## Function Declaration

 - In normal function declaration we use the function keyword as the first 
 valid JS token/expression of the line. 
 - This is just like initialising a normal function

```
function exec() { // normal function declaration
    console.log("executing some task");
}
```

## Function expression

Using a function expression we get similar functionality like a normal function declaration with a few differences. 
When we initialise a function expression then we dont need to start the line with `function` keyword. The function keyword is used to initialise a function inside another valid JS expression. So here the simplest way to syntactically distinguish function expression from normal function declaration is that the line where we are defining the function expression doesn't start with `function` keyword. It might start with something else. 

```
const f = function fun () { // function expressions
    return "doing fun";
}
```
There are more ways to initialise function expressions, but we will come to that later. 

Now how you can call the above function expression to execute itself ??
You cannot use the name of the function which is `fun` in our case and instead we need to use the variable 
inside which we are trying to store the reference of the function. 
```
console.log(f())
```
The below example is also a function expression getting passed to a HOF. 
```
[1,2,3,4,5].map(function process(x) {
    return x*x;
})
```

## Types of function expression 

### Named function expression
In the below code, we create a function with name as `fun` and then allocate it to `f`.
```
const f = function fun() {
    console.log("hi");
}
```


### Anonymous function expression
In the below code, we create a function without a name, and assign it to variable `f`. Here as the function is not having any name, it is called anonymous function expression.
```
const f = function () {
    console.log("hi");
}
```

// Given an array of n values, calculate factorial of each value in the array and store the ans in a new array. You have to do it using map function and passing function expression as the callback.

Now in the above problem if we pass `anonymous function expression` then how will we call recursion. 
There is a deprecated function `arguments.callee` that can still help us, but its not recommended to use it. 

```
[1,2,3,4,5].map(function (n) {
  if(n == 0) return 1;
    return n*arguments.callee(n-1);
}) 
```
That's one of the reasons why choosing anonymmous function is not good. 

Now apart from the recursion issue, there are more issues to anonymous function expression :
    - They are less readable. Currently in an anonymous function expression, we might have to go thorough the whole source code, to understand whats going on.
    - Whereas the named function expression has better readability as you dont need to go though the code and then understand, you can read the name of the function to identify what the function does. 


Apart from the above there is one more problem that exist with anonymous function expression. This is regarding debugging. 

```
function fun(fn, gn) {
    console.log("welcome to fun");
    gn();
    fn();
}

fun(function () {
    console.lo("calling fn inside fun");
    //console.trace();
}, function () {
    console.log("Calling gn inside fun")
});
```
In the above code if we run it, then there is an error that will come up and the whole stack trace will be printed, but as the code contains anonymous function expressions it is difficult to read the stack trace and undestand which function called which other function and which is actually the culprit.

Whereas if you replace anonymous function expression with named function expression then stack trace will show the name of each and every function. 

```
function fun(fn, gn) {
    console.log("welcome to fun");
    gn();
    fn();
}

fun(function f() {
    console.lo("calling fn inside fun");
    //console.trace();
}, function g() {
    console.log("Calling gn inside fun")
});
```

## Should you prefer named function expression or anonymous function expression ?
IMO we should always and always prefer named function expression. 

- It creates reliable function self reference mainly suitable for recursion or may be when you need to call an inbuilt function with it. Initially we used to have `arguments.callee`, read more about this in the doc below.

[arguments.callee - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)

- More debuggable stack traces. Named function expression will show up in the stack trace. So let's say when we pass anonymous function expression inside a call back this can create an issue.
- More self-documenting code leading to better readability.