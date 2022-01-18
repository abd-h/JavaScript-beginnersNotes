/*                  Sum All Odd Fibonacci Numbers

Given a positive integer num, retain the sum of all the odd Fibonacci numbers
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. The first six 
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
less than or equal to 1, 1, 3 and 5. 
function remainder(num) {
    return num % 2 === 1;
}

function evenNumber(num) {
    let fib1 = [1, 1];
    for(let i =1; i < num; i++) {
        fib1.push(fib1[i] + fib1[i -1]);
    }
     return fib1.filter(a => (remainder(a) && a < num)? a : "")
                      .reduce((a, b) => a + b)
}
console.log(evenNumber(4)); 
console.log(evenNumber(10));
console.log(evenNumber(1000));*/

// Creating Memoized function
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache) {
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
// Creating function for odd numbers
function oddNumbers(num) {
    return num % 2 === 1;
}

// Creating function to calculate Sum of all fibonacci numbers
function sumFibs(num) {
    let fib =[1, 1],
        fib2 = [];
    for(let i = 1; i < num; i++) {
        fib.push(fib[i] + fib[i - 1]);
    }    
    fib.filter(a => (oddNumbers(a) && a <= num)? fib2.push(a) : a);
    return fib2.reduce((a, b) => a + b, 0)             
}


// Creating memoized function for sumFibs
const memoizedSumFibs = memoize(sumFibs);
console.log(memoizedSumFibs(4)); // returns 5
console.log(memoizedSumFibs(10)); // returns 10
console.log(memoizedSumFibs(4000000)); // returns 4613732
console.log(memoizedSumFibs(75024)); // returns 60696
console.log(memoizedSumFibs(75025)); // returns 135721