// Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hello World");
}
reusableFunction(); //  reads Hello World

// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2); // Reads 3
functionWithArgs(7, 9); // Reads 16

// Global Scope and Functions
// Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.
var myGlobal = 10;
// Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
function fun1() {
    oopsGlobal = 5;//never do this;
}
function fun2() {
    var localScope = 5;// do this;
}
// Global vs. Local Scope in Functions

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// Example
var outWear = "T-shirt";
function myoutfit() {
    var outWear = "Jumper";
    return outWear;
}
console.log(myoutfit()); // Reads Jumber 

// Return a Value from a Function with Return statement

// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function

// Example

function timesFive(params) {
  return params *5;
}
var answer = timesFive(5);
console.log(answer);
console.log(timesFive(2));
console.log(timesFive(0));

// Understanding Undefined Value returned from a Function

// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

//Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined

// Assignment with a Returned Value

// Everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable. see example below

var processed = 0;

function processArg(params) {
    return (params + 5) / 2;
}
 processed = processArg(2);
console.log(processed);

// Stand in Line (test your knowledge)

function nextInLine(arr, item) {
    arr.push(item);
    var remove = arr.shift();
    return remove;
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));








