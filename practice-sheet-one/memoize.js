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

/*Now that's grat! This simple memoize function will wrap any simple function into a memoized equovalent.
The code works fine for simple functions and it can be easily tweaked to handle any number of arguments as per your needs. Another alternative is to make use of some de-facto libraries such as:

Lodash's _.memoize(func, [resolver])
ES7 @memoize decorators from decko
Memoizing recursive functions
If you try passing in a recursive function to the memoize function above or _.mrmoize from Lodash, the results won't be as expected since the recursivefunction is calling thememoized function. Kere's how you can tweek a textbook factorial example (codepen);    */

// Same memoize function from before
const factorial = memoize(
    (x) => {
        if(x === 0){
            return 1;
        } else {
            return x * factorial(x -1);
        }
    }
);
console.log(factorial(5)); // calculated 
console.log(factorial(6)); // calculated for 6 and cached for 5
/* A few points to note from this code:

The factorial function is recursively calling a  memoized version of  itself.
The memoized function is caching the values of previous factorials which significantly improves calculations
since they can be reused factorial(6) = 6 * factorial(5)
Is memoization same as caching?
Yes, kind of. Memoizaion is actually a specific type of caching. While caching can refer in general to any storing technique (like HTTP caching) for  future use, memoizing specifically involves caching the return 
values of a function.

When to memoize your functions
Although it might look like memoization can be used with all functions, it actually has limited use cases:

In order to memoize a fuction, it should be pure so that return values are the same for sme inputs every time 
Memoizing is a trade-off between added space and added speed and thus only significant for functions have 
a limited input range so that cached values can be made use of more frequently.

It might look like you should memoixe your API calls however it it isn't necessary because the browser 
automatically caches them for you. See HTTP caching for more detail.

The best  use case I found for memoized functions is for heavy computational functions which can significantly
improve performance  (factorial and fivonacci are not really gokkof real world examples).

If you're into React/Redux you can check out reselect which uses a memoized selector to ensure that 
calculations only happen when a change happens in a realted part of the state tree.





*/





