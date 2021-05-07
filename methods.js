/*          Generate Random Fractions with JavaScript

Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates 
a random decimal number between 0 (inclusive) and 
not quite up to 1 (exclusive). Thus Math.random() 
can return a 0 but never quite return a 1

Note: Like Storing Values with the Equal Operator, 
all function calls will be resolved before the return 
executes, so we can return the value of the Math.random() function.

*/ 
function mathFraction(){
    return Math.random(1);
}
console.log(mathFraction());
console.log(mathFraction());

/*          Generate Random Whole Numbers with JavaScript

It's great that we can generate random decimal numbers, 
but it's even more useful if we use it to generate random 
whole numbers.

1.  Use Math.random() to generate a random decimal.
2.  Multiply that random decimal by 20.
3.  Use another function, Math.floor() to round the number 
    down to its nearest whole number.

Remember that Math.random() can never quite return a 1 and, 
because we're rounding down, it's impossible to actually get 20. 
This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

We are calling Math.random(), multiplying the result by 20, 
then passing the value to Math.floor() 
function to round the value down to the nearest whole number.*/

function randomWholeNum(){
    Math.floor(Math.random()*20)
}
/*          Challenge 1
Use this technique to generate and return a random whole number 
between 0 and 9.*/

function randomWholeNum2() {
    return Math.floor(Math.random()* 10);
}
console.log(randomWholeNum2(3));

/*          Generate Random Whole Numbers within a Range

Instead of generating a random whole number between zero 
and a given number like we did before, we can generate a 
random whole number that falls within a range of two specific 
numbers.

To do this, we'll define a minimum number min and a maximum 
number max.

Here's the formula we'll use. Take a moment to read it 
and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min     */

/*          Challenge 2

Create a function called randomRange that takes a range myMin and myMax 
and returns a random whole number that's greater than or equal to myMin, 
and is less than or equal to myMax, inclusive.*/

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax -myMin)) + myMin;
}
console.log(randomRange(3, 9));
console.log(randomRange(3, 9));
console.log(randomRange(3, 9));

/*          Use the parseInt FunctionPassed
The parseInt() function parses a string and returns an integer. 
Here's an example:

var a = parseInt("007");

The above function converts the string 007 to the integer 7. 
If the first character in the string can't be converted into a 
number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts 
the input string str into an integer, and returns it.*/

function converToInteger(str) {
    return parseInt(str);
}
console.log(converToInteger("56"));

/*          Use the parseInt Function with a Radix

The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies 
the base of the number in the string. 

The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

var a = parseInt("11", 2);

The radix variable says that 11 is in the binary system, 
or base 2. 
This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts 
a binary number to an integer and returns it. */

function convToInteger(str, Radix) {
    return parseInt(str, 2);
}
console.log(convToInteger("10011"));

/*          Use the Conditional (Ternary) Operator

The conditional operator, also called the ternary operator, 
can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, 
b is the code to run when the condition returns true, 
and c is the code to run when the condition returns false.

The following function uses an if/else statement to check 
a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
Use the conditional operator in the checkEqual function 
to check if two numbers are equal or not. The function 
should return either the string Equal or the string Not Equal.*/

function checkEqual(a, b) {
    return  a == b ? "Equal" : "Not  Equal";
}
console.log(checkEqual(3, "3"));

/*          Use Multiple Conditional (Ternary) Operators

In the previous challenge, you used a single conditional operator. 
You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to 
check multiple conditions:

function fineGreaterOrEqual(a, b) {
    if (a == b) {
        return "Equal";
    } else if (a >= b) {
        return "Greater or Equal";
    }
    else {
        return "Not Equal"
    }
} */
// The above function can be re-written using multiple conditional 
operators:

function fineGreaterOrEqual(a, b){
    return (a === b) ? "Equal" 
    : (a > b )? " a Greater" 
    : "b is Greater";
}
console.log(fineGreaterOrEqual(4, 3));

/*It is considered best practice to format multiple conditional 
operators such that each condition is on a separate line, 
as shown above. Using multiple conditional operators without proper 
indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}*/

/*In the checkSign function, use multiple conditional 
operators - following the recommended format used in 
findGreaterOrEqual - to check if a number is positive, 
negative or zero. The function should return positive, 
negative or zero.*/

function checkSign(number) {
    return (number > 0)? "Positive"
    : (number === 0) ? "Zero"
    : "Negative";
}

/*Use Recursion to Create a Countdown

In a previous challenge, you learned how to use recursion 
to replace a for loop. Now, let's look at a more complex 
function that returns an array of consecutive integers 
starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. 
The base case tells the recursive function when it no longer needs 
to call itself. It is a simple case where the return value is already 
known. 

There will also be a recursive call which executes the original 
function with different arguments. If the function is written correctly, 
eventually the base case will be reached.

For example, say you want to write a recursive function 
that returns an array containing the numbers 1 through n. 
This function will need to accept an argument, n, representing 
the final number. Then it will need to call itself with progressively 
smaller values of n until it reaches 1. You could write the function 
as follows:
*/

function countUp(n) {
    if (n < 1) {
        return [];
    }
    else {
        
        const countArray = countUp(n -1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countUp(5));

/*          Use Recursion to Create a Range of Numbers

Continuing from the previous challenge, we provide you another 
opportunity to create a recursive function to solve a problem.

We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins 
with a number represented by the startNum parameter and ends 
with a number represented by the endNum parameter. 

The starting number will always be less than or equal to the 
ending number. Your function must use recursion by calling 
 itself and not use loops of any kind. It should also work 
for cases where both startNum and endNum are the same.*/
Range

function rangeOfNumbers2(startNum, endNum){
    if(startNum - endNum === 1) {
        return [];
    }
    else {
        const rangeOfArray = rangeOfNumbers2(startNum, endNum -1);
        rangeOfArray.push(endNum);
        return rangeOfArray;
    }
}
console.log(rangeOfNumbers2(1, 5));
