/**
 * Recursion and stack
 * 
 * Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.

When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

Two ways of thinking
For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
 */

//There are two ways to implement this:

// 1. Iteratiive thinking : the for loo:

function powForLoop(x, n) {
    var newResult = 1;
    for (var i = 0; i < n; i++) {
        newResult *= x;
    }
    return newResult;
}
console.log(powForLoop(2, 3)); // returns 8

// 2. Recursive thinking: simplify the task and call self:

function powRecursion(x, n){
    if (n ==1) {
        return x;
    }
    else {
        return x * powRecursion(x, n -1);
    }
}
console.log(powRecursion(2, 3)); // return 8;

/**
 * When pow(x, n) is called, the execution splits into two branches:
 * 
 *               if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)

 */

/**
 * If n == 1, then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result:
 *  pow(x, 1) equals x.
 * 
Otherwise, we can represent pow(x, n) as:        x * pow(x, n - 1). 

In maths, one would write 

        xn = x * xn-1. 

This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). 

Next steps simplify it further and further until n reaches 1.

We can also say that pow recursively calls itself till n == 1.

For example, to calculate pow(2, 4) the recursive variant does these steps:

pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2

So, the recursion reduces a function call to a simpler one, and then – to even more simpler, and so on, until the result becomes obvious.
 */   

/** Recursion is usually shorter
A recursive solution is usually shorter than an iterative one.

Here we can rewrite the same using the conditional operator ? instead of if to make pow(x, n) more terse and still very readable: */

function powRecursion2(x, n) {
    return (n == 1)? x : (x * powRecursion2(x, n-1));
}
console.log(powRecursion2(2, 4));

/**
 * Recursive traversals
Another great application of the recursion is a recursive traversal.

Imagine, we have a company. The staff structure can be presented as an object:
 */

let company = {
    sales: [
        {
            name: "John",
            salary: 1000
        },
        {
            name: "Alice",
            salary: 1000
        }
    ],
    development: {
        sates: [
            {
                name: "Peter",
                salary: 2000
            },
            {
                name: "Alex",
                salary: 1800,
            }],
        internals: [
            {
                name: "Jack",
                salary: 1300
            }]
    }
}
function sumSalaries(department){
    if (Array.isArray(department))//case1
    return department.reduce((prev, current) => prev + current.salary, 0);// sum the array
    else {// case (2)
        let sum = 0;
        for  (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdeparment, sum the results
        }
        return sum;
    }
}
console.log(sumSalaries(company));
