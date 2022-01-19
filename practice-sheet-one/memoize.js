/*                  How to use Memoize to cache JavaScript function result and speed up your code

Functions are an intergrall part of programming. They help add modularity and 
reusability to our code. It's quite common to divide our program into chunks using 
functions which we can call later to perform som useful action.

Sometimes, a function can become expensive to call multiple times (say, a function 
    to calculate the factorial of a number). But there's a way we can optimaze such 
functions and make them execute much faster: caching

For example, let's say we have a function to return the factorial of a number:

function factorial(n) {
    // calculations: n * (n-1) * (n-2) * ...(2) * (1)
    return factorial
} 
Great, now let't find factorial(50). the computer will perform calculations and return 
us the final anwer, sweet.

When that's done, let's find factorial(51). The computer again performs a number of calculations 
and gets us the result, but you might have noticed the we're already repeating a number of steps
that could have been avoided. An optimized way would be:

factorial(51) = factorial(50) * 51
But our function performs the calculations from scratch every time it's called:

factorial(51) = 51 * 50 *49 * 48 ... * 2 * 1
Wouldn't it be cool if somehow our factorial function could remember the values from its previous 
calculations and use the to speed up the execution?

In comes memoization, a way for our fuction to rememver (cache) the results. Now that you've a 
basic understanding of  what we're trying to achieve, here's a formal definition:

Memoization is an optimization texhnique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Memoizing in simple terms means memorizing or storing in memory. A memoized function is usually faster 
because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be feching the result from the cache.

Jer's what a simple memoized function might look like:*/

// a simple function to add something
const add = (n) => (n + 10);
console.log("Simple call ", add(9));

// a simple memoize function that takes in a function
// and returns a memoized function.

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache) {
            console.log("Fetching from cache");
            return cache[n];
        } else {
            console.log("Calculating the result");
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add)
console.log(memoizedAdd(3)); // calculated
console.log(memoizedAdd(3)); // cached
console.log(memoizedAdd(4)); // calculated
console.log(memoizedAdd(4)); // cached




