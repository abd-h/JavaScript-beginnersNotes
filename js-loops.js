//  Iterate with JavaScript While Loops

//  You can thre same code multiple times by using a loop

//  The firs type of loop i will be learning is called while loop because it runs while specified condition is true and stops once that condition is not longer true.

var ourArray = [];
var i = 0;
while (i < 5) {
    ourArray.push(i);
    i++;
}
//  in the example code obove the while loop will execute 5 times and apend the numbers 0 through 4 to ourArray.

// lets try getting a while loop to work by pushing values to an array.

var myArray = [];
var i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}
console.log(myArray);

// Iterate with JavaScript For Loops

// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loops is called a for loop because it runs for  a specific number of times .

//  For loos  are declared with three optionalexpressions seperated with a semicolons:

// for  (a; b; c),  where a is the  initialization statement, b is the condition statement, and  c is the final expression.

//  The initialazation staement is executed one time only before the loop starts. It is typically used to defined and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false, your loop will never excecuted.

// The final experation is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

/*
In the following example we initialize with i = 0; 
and iterate while our condition 
    i  < 5 is true.
    Will increment i by 1 in each loo iteration with i++ as our final experasion.
*/
var newArray = [];
for (var i = 0; i < 5; i++) {
    newArray.push(i);
}
console.log(newArray);

/**
 * For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
 */
var ourArray1 = [];
for (var i = 0; i <= 15; i +=3) {
    ourArray1.push(i);
}
console.log(ourArray1);

var myArray1 = [];
for (var i =10;  i > 0; i -=2) {
    myArray1.push(i);
}
console.log(myArray1);

/**
 * Iterate Through an Array with a For Loop
 * 
 A common task in JavaScript is to iterate through the contents of an array. 
 One way to do that is with a for loop. 
 This code will output each element of the array arr to the console:
 */

 var arr = [10, 9, 8, 7, 6];
 for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
 }

 /**
  * Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. 
 Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. 
 In this case the last iteration is i === 4 i.e. 
 when i becomes equal to arr.length and outputs 6 to the console.
  */

var myArray2 = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArray2.length; i++) {
   total += myArray2[i];
}
console.log(total);

/**
 * Nesting For Loops
 * 
If you have a multi-dimensional array, 
you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
Here is an example:
 */
var arr1 = [[1, 2], [3, 4], [5, 6]];
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++){
       console.log(arr1[i][j]);
    }
}
 
function multiply(arr1){
    var product = 1;
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr1[i].length; j++) {
          product *= (arr1[i][j]);
        }
    }
    return product;
}
console.log(multiply([[1,2],[3,4],[5,6,7]]));

/**
 * Iterare While Do Loop
 * 
 * The next type of loop is called do...while loop because it will first do one pass
 * of the code inside the loop no matter what, and then continue to run the code
 * while the specified condition evaluates to true.
 */

var ourArray2 = [];
var i = 5;
while (i < 5) {
    ourArray2.push(i); i++;
}
console.log(ourArray2); //retuns []

/**
 * In this example, we initialize the value of ourArray to an empty array and the value of i to 5. 
 * When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:
 */
var ourArray3 = [];
var i = 5
do {
    ourArray3.push(i); i++;
} while(i < 5);
console.log(ourArray3); // returns [5] ;

/**
 * In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.
 */

var ourArray4 = [];
var i = 10;
while (i < 5){
    ourArray4.push(i); i++;
}
console.log(ourArray4);

var ourArray5 = [];
var i = 10;
do {
    ourArray5.push(i); i++;
} while (i < 5);
console.log(i);

/**
 * Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
 */

function multiply(arr, n) {
    var product2 = 0;
    for (var i = 0; i < n; i++){
        product2 +=arr[i]
    }
    return product2;
}
console.log(multiply([2, 3, 4, 4], 3));


/**
 * However, notice that ... multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.
 */

function multiply2(arr, n) {
    if (n <= 0){
        return 0;
    }
    else {
        return multiply2(arr, n -1) + arr[n -1];
    }
}
console.log(multiply2([2,3,4,5], 3));

/**
 * Recursion practice
 */
function sumOf(arr, n){
    var newTotal =1;
    for (var i = 0; i < n; i++){
        newTotal *=arr
    }
    return newTotal;
}
console.log(sumOf(2, 3));

function countDown(number) {
    newNumber= 0;
    if(number == 0){
     return newNumber = countDown(number - 1);
     
    }
    else {
        return newNumber;
    }
}
console.log(countDown(10));

    var countdown = [];
    for (var i = 10; i > 0; i--) {
        countdown.push(i);
    }
    console.log(countdown);
    
    /**
     * For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.
     * 1) pow(2, 2) = 4
     * 2)pow(2, 3) = 8
     * 3)pow(2, 4) = 16
     * 
     */
function pow(x, n){
    let newNumber = 1;
    for (var i = 0; i < n; i++){
        newNumber *= x;
    }
    return newNumber;
}
console.log(pow(2, 3));

function  pow1(x, n) {
    if (n == 1){
        return x;
    }
    else {
        x * pow(x, n-1);
    }
    
}
console.log(pow(2, 4));
/**
 * For example, to calculate pow(2, 4) the recursive variant does these steps:

pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
So, the recursion reduces a function call to a simpler one, and then – to even more simpler, and so on, until the result becomes obvious.

Recursion is usually shorter
A recursive solution is usually shorter than an iterative one.

Here we can rewrite the same using the conditional operator ? instead of if to make pow(x, n) more terse and still very readable:

function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}
The maximal number of nested calls (including the first one) is called recursion depth. In our case, it will be exactly n.

The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them. There are automatic optimizations that help alleviate this (“tail calls optimizations”), but they are not yet supported everywhere and work only in simple cases.

That limits the application of recursion, but it still remains very wide. There are many tasks where recursive way of thinking gives simpler code, easier to maintain.
 */
//....................................

// Profile Lookup
var contacts =[
    {
        "firstName" : "Akira",
        "lastName":  "Laine",
        "number": "0543236543",
        "likes": [
            "Pizza", "Coding", "Brownie Points"
        ]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": [
            "Hogwarts", "Magic", "Hagrid"
        ]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Homes",
        "number": "0487345643",
        "likes": [
            "Intriguing Cases", "Violin"
        ]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": [
            "javaScript", "Game", "foxes"
        ]
    }
] ;

function lookUpProfile(name, prop) {
   for (var i = 0; i < contacts.length; i++) 
   if (contacts[i].firstName === name) {
       if (prop in contacts[i]) {
           return contacts[i][prop];
       }
       else {
           return"No such contact";
       }
   }
   return "No such property"
}
console.log(contacts[i]);