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

# IIFE
 - IIFE stands for Immediately invoked function expression.

Now we already understand th emeaning of function expresion. IIFE is nothing but a special type of function expression which gets invoked immediately (gets called immediately) at the posotion where we iniialise it (or define it). 

As we know that function expression can be easily identified if the position where we define them donot have `function` keyword as the first valid token. 

So similarly in IIFE, we actually bind a function expression inside a pair of parenthesis, that makes the parenthesis the first valid token.

```
(function f() {
        console.log("this is an IIFE");
})

```

Now the above syntax has just defined a function expression, but in order to become an IIFE, it needs to get invoked (called) at the same time. 
We can use another pair of parenthesis `()` infront of our IIFE to immediately call it. 
```
(function f() {
        console.log("this is an IIFE");
})();

```

Now let's say if we want to define an IIFE with parameters, then we can do something like this. 
```
(function f(x, y) {
        console.log("this is an IIFE", x, y);
})("abc", "def");

```
So here, we are actually defining the parameters of the function expression as `x` and `y` and when we are immediately invoking it, using the parenthesis, then we are passing the actual arguments to `x` and `y`. 

Now if we want to return something, we can just write the normal return statement and that value will be immediately returned.
```
(function f(x, y) {
        console.log("this is an IIFE", x, y);
        return 10;
})("abc", "def");
```


## Why do you want to use IIFE ? 

As these are function expressions that gets immedtialy invoked, post their invocation they cannot be used again. Why this happens ? Becuase of Lexical scoping. 
Now how can we use this feature ? 

Let's say, a new intern comes to your team, and to write a feature he/she declared another global variable which was already getting used. This can create conflict. Assuming that the intern's variable getting used in their feature will not be reqd anywhere else, and the naming cannot be changed (may be it got missed in a review process or we can't give it another name) in these cases IIFE can be useful. We can write a function expression that has the whole logic and bind all the variables inside it. Hence it will not cause any conflict as these won't be available anywhere else apart form invocation.

```
(function f() {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();
```

## Should we make IIFE an anonymous function expression ? 
No: 1. becuase this makes the code less readable, 2. It makes the code hard to debug.

## So where can we use anonymous function expression ? 
We should ideally use them as less as possible, but if we want , we can use them where the function has very less and obvious piece of code. 

# Arrow function expressions
It is a shorter way to implement traditional function expressions. 
Arrow function expressions, can be used at places where we have one liner or very obvious piece of code, as arrow function expressions are always anonymous, we can't give name to them. 

 - Arrow function expression cannot of be used as constructors, because they don't have `this` binding. 

How to declare an arrow function expression ? 

```
const func = (arg1, arg2, arg3) => {
    // write your logic
    return <some value>;
}
```

If your function definition is a onliner then we don't need curly braces

```
const sq = (x) => x*x; 
```
