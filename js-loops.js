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
 A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:
 */

 var arr = [10, 9, 8, 7, 6];
 for (var i = 0; i < arr.length; i++) {
     console.log([i]);
 }
 console.log(arr);