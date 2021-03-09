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
