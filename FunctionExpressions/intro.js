function exec() { // normal function declaration
    console.log("executing some task");
}
const f = function fun () { // function expressions
    return "doing fun";
}
// the above two functions differ based on scoping mechanism also along with 
// syntax
console.log(f());
