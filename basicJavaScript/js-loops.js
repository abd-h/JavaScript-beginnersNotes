/*           Iterate with JavaScript While Loops
You can run the same code multiple times by using a loop
The firs type of loop you will be learning is called while loop because it runs while specified condition is true and stops once that condition is not longer true.*/ 
var ourArray = [];
var i = 0;
while (i  < 5) {
    ourArray.push(i);
     i++;
}
console.log(ourArray);
function downFromTen(num){
    let firstLoop = [];
    let ii = 0;
    while (ii < num) {
        firstLoop.unshift(ii);
        ii++;
    }
    return firstLoop;
}
console.log(downFromTen(10));
/*in the example code obove the while loop will execute 5 times 
and apend the numbers 0 through 4 to ourArray.*/  

/*lets try getting a while loop to work by pushing values to an array by adding the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop*/ 
var myArray = [];
var i = 5;
while (i >=0) {
    myArray.push(i);
    i--;
}
console.log(myArray);



/*          Iterate with JavaScript For Loops

You can run the same code multiple times by using a loop.
The most common type of JavaScript loops is called a for loop 
because it runs for  a specific number of times .
For loops  are declared with three optionalexpressions seperated with a semicolons:

for  (a; b; c),  where a is the  initialization statement, 
b is the condition statement, and  c is the final expression.

The initialazation staement is executed one time only before the loop starts. 
It is typically used to defined and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration 
and will continue as long as it evaluates to true. 
When the condition is false, your loop will never excecuted.

The final experation is executed at the end of each loop iteration,
prior to the next condition check and is usually used to increment 
or decrement your loop counter.

In the following example we initialize with i = 0; 
and iterate while our condition 
    i  < 5 is true.
    Will increment i by 1 in each loo iteration with i++ as our final experasion.
*/
var forLoopArray = [];
for (i = 0; i < 5; i++) {
    forLoopArray.unshift(i);
}
console.log(forLoopArray);

/*          Iterate Odd Numbers With a For Loop
For loops don't have to iterate one at a time. 
By changing our final-expression, we can count by even numbers.
We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
 */
var oddNumbers = [];
for (var i = 1; i <10; i += 2) {
    oddNumbers.push(i);
}
console.log(oddNumbers);

/*          Count Backwards With a For Loop
A for loop can also count backwards, so long as we can define the right conditions.
In order to decrement by two each iteration, we'll need to change our initialization, 
condition, and final expression.
We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.*/
var countBackwards = [];
for (var i = 10; i > 0; i -= 2) {
    countBackwards.push(i);
}
console.log(countBackwards);
/* countBacwords will now contain [10,8,6,4,2]. Let's change our initialization and final expression so we can count backward by twos by odd numbers.*/

/*      Iterate Through an Array with a For Loop
  A common task in JavaScript is to iterate through the contents of an array. 
 One way to do that is with a for loop. 
 This code will output each element of the array arr to the console:
 */
var arr = [15, 12, 9, 6, 3, 1000];
let arR =[];
let remove1 = 5;
let add1 = 16

 
   function morethanTen(arr) {
       for (let i = 0; i < arr.length; i++)
        if(arr[i] > 9){
           
      arR.push(arr[i]);
    }
    
     return arR;
}

console.log(arR);
console.log(morethanTen([15, 12, 9, 6, 3, 1000,24]));
/*Remember that arrays have zero-based indexing, 
which means the last index of the array is length - 1. 
 Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. 
 In this case the last iteration is i === 24 i.e. 
 when i becomes equal to arr.length and outputs 0 to the console.

 Below is an example I declared and initialize a variable total to 0. 
 I Use a for loop to add the value of each element of the myArr array to total.
  */
 var myNewArr =[ 2, 3, 4,5 ,6];
 var total = 0;
 for (var i = 0; i < myNewArr.length; i++) {
   
     total += myNewArr[i];
 }
 console.log(total);
 function reverseStr1(str) {
     let result = [];
      
    
     for (let i = 0; i <str.length; i++) {
       let result1 = str[i];
       let result3 = [];
       result3 += result1;
       console.log(result3);
       result.push(result3)
     }
     return result;
 }
 console.log(reverseStr1("Hello"));


/*          Nesting For Loops
If you have a multi-dimensional array, 
you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
Here is an example:
 */
var nestedArr =[[2, 3], [4,5], [6, 7], [8], [9]];
var nestedTotal = 0;
for (var i =0; i < nestedArr.length; i++) {
    for (var j = 0; j < nestedArr[i].length; j++){
        console.log(nestedArr[i][j]);
        nestedTotal += nestedArr[i][j];
    }
}
console.log(nestedTotal);
    
    /*This outputs each sub-element in arr one at a time. 
Note that for the inner loop, we are checking the .length of arr[i], 
since arr[i] is itself an array.
*/
function multiplAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j =0; j < arr[i].length; j++){
            product *= arr[i][j];

        }
        
    }
     return product   
}
console.log(multiplAll([[23, 2],[2, 6]]));
/**
            Iterare While Do Loop
The next type of loop is called do...while loop because it will first do one pass
 of the code inside the loop no matter what, and then continue to run the code
 while the specified condition evaluates to true.
 */
var doWhileArray = [];
var i = 0;
do {
    doWhileArray.push(i);
    i++;
} while (i < 5);

/*The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:*/

var whileArray = [];
var i = 5;
while (i <=5){
    whileArray.push[i];
    i++;
}
console.log(i);
function someStr(str) {
     let someS = [];
     let id = 0;
     while (id < str.length) {
         someS.unshift(str[id]);
         id++
     }
     return someS;
 }
console.log(someStr("Hello"));


// var testDoWhile = [];
// var iii = 6;
// do {
//     testDoWhile.push([iii]);
//     iii++;
// } while(i < 12);
// console.log(iii);
// console.log(testDoWhile);
 
/*In the example above, we initialize the value of ourArray to an empty array and the value of i to 5. 
When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:
 */
// returns [5] ;

/**
 * In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.
 */


/**
 * Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
 */
function multiply(arr, n) {
    product = 1;
    for (var i = 0; i < n; i++){
        product *= arr[i];
    }
    return product;
}
console.log(multiply(2));



/**
 * However, notice that ... multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.
 */ function multiplier(arr, n) {
     if (n <= 0) {
         return 1;
     }
     else {
         return multiplier(arr, n-1) * arr[n-1];
     }
 }
console.log(multiplier([2, 3, 4, 5], 3));

/*Write a recursive function, sum(arr, n), 
that returns the sum of the first n elements of an array arr.*/
function sum(arr, n) {
    if (n === 0){
        return 0;
    }
    else {
        return sum(arr, n-1) + arr[n -1];
    }
}
console.log(sum([2, 3, 4, 5], 3));
/**
 * Recursion practice
 */

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



/*          Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) 
as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and 
the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

*/ 
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
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === name) {
                if (contacts[i].hasOwnProperty(prop)) {
                    return contacts[i][prop];
                }
                else {
                    return "No such Property"
                }
            }

        }
        return "No such Contacts";
}
console.log(lookUpProfile("Kristian", "lastName"));
//------------------------------------------------------------

