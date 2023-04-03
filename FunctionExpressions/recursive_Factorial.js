function fact(n) {
    if(n == 0) return 1;
    return n*fact(n-1);
}

// n! = n * (n-1)!

console.log(fact(5));