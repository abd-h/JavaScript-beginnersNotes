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
