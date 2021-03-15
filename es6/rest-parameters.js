/*          Use the Rest Parameter with Function Parameters

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:*/

function howMany(...args) {
    return "You have passed " + args.length + " arguments";
}
console.log(howMany(0, 2, 3));
console.log(howMany("string", null, [1, 2, 3], {}));

/*The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/
const sum = (...args) => {
    
    return args.reduce((a,b) => a + b+ 0);
}
console.log(sum(0, 1, 2));// returns 3;
console.log(sum(1, 2, 3, 4));// returns 3;
console.log(sum(5));// returns 3;
console.log(sum(0));// returns 3;

/*          Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:*/
const arr = [6, 89, 3, 45];
const maximus = Math.max.apply(null, arr);
console.log(maximus);
/*maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.*/

const arr1 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr1);
const maximus2 = Math.min.apply(null, arr1)
console.log(maximus1); // returns 89
console.log(maximus2); // returns 3
/*...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spread = ...arr1;

Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];*/

const arr2 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr3;
arr3 = [...arr2]
console.log(arr3);