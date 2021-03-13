/**
 * Use Bracket Notation to Find the Nth Character in a String
 */

/**
 * You can also use bracket notation to get the character at other positions within a string.
 * 
 * Remember that computers start counting at 0, so the first character is actually the zeroth character.
 */

// Example

var foreName = "Cabdifataax";
var foreNameLength = foreName[5];
console.log(foreNameLength); // returns 

/**
 * Use Bracket Notation to Find the Last Character in a String
 * 
 * In order to get the last letter of a string, you can subtract one from the string's length.
 * 
 * For example, if var sirName = "Jibriil", you can get the value of the last letter of the string by using firstName[firstName.length - 1]
 */

// Example

var sirName = "Jibriil";
var lastLetterOflastName = sirName[sirName.length - 1];
console.log(lastLetterOflastName);

/**
 * Use Bracket Notation to Find the Nth-to-Last Character in a StringPassed
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
 */

// Example

var thirdLastLetter = sirName[sirName.length -3];
console.log(thirdLastLetter);

/**Store Multiple Values in one Variable using JavaScript Arrays
 * 
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this: */

var chickenSandwich = ["Chicken Breast",  "Spices", 1 ];

console.log(chickenSandwich.length);

var periperiSandwich = [["Chicken Breast",  1], ["Spices",  2, ["Peri Pri", 1],["Classic Babaque",1]], ["Oil, Teaspoon", 1], ["Cooking Time in mins", 10] ];

console.log(periperiSandwich.length);

/**
 * Access Array Data with Indexes 
 
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.

 */
// Example
var accessArray = [50,  60, 70];
accessArray[0];
var dataOfArray = accessArray[0];
console.log(dataOfArray);

/**
 * Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely.
 */
accessArray[0] = 15;
console.log(accessArray); // [15, 60,70]

/**
 * Access Multi-Dimensional Arrays With IndexesPassed
One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
 */
var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
]
arr[3];// returns[ [10, 11, 12], 13, 14]
arr[3][0]; // returns [10, 11, 12]
arr[3][0][1]; // [11]

/**
 * An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.
*/
//Examples:
arr[3] = [10,11,13];
arr.push([14, 15, 16]);
console.log(arr);

/**
 * Manipulate Arrays With pop()
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
 */

var removedArr = arr.pop();
console.log(removedArr);// returns [14, 15, 16]

/**
 * Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
 */
var removeFirst = arr.shift(); 
console.log(removeFirst);// returns [1, 2, 3]

/**
 * Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
 */

arr.unshift([1,2, 3]);
console.log(arr); // returns  [[1,2 3], [4,5,6], [7,8,9,], [10,11,12], [13, 14, 15]]

/**
 * Shopping List
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
 */

var myShoppingList = [];
myShoppingList.unshift(["Pasta 500g", 1], ["Eggs 6Pk", 1]);
myShoppingList.push(["Bread", 1], ["Milk 6pts", 1], ["Chedder mild, 500g", 1]);
console.log(myShoppingList);