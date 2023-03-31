// Given a number n, check if the number is a prime number or not ?
// Ex: n = 5
// ans: yes

// Ex: n = 8
// ans: no

// ->  n -> [2, n-1] , i = 4, n%4 == 0
let n = 27;
let ans = true;
for(let i = 2; i*i <= n; i++) { // i*i <= n -> i^2 <= n -> i <= root(n) [2, root(n)]
    if(n % i == 0) {
        // n is not prime
        ans = false;
        break;
    }
}

if(ans == true) {
    console.log("yes");
} else {
    console.log("no");
}

// 49 -> [2, 48] -> i = 7

/// for any number n we do approx n-2 iterations , for very large value of n, n-2 is approx n only