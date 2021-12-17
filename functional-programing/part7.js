/* Sort an array Alphabetically using the sort Method

The sort method sorts the elements of an array according to the callback function.

for example:*/
function ascendingOrder(arr){
    return arr.sort((a, b) => a - b)
}
const unOrderedNumbers = [1, 4, 3, 5, 2];
console.log(ascendingOrder(unOrderedNumbers)); // returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
    return arr.sort((a, b) => (a === b)? 0 
                        :(a < b)? 1
                        : -1)
}
const reverseAlphabet = ['l', 'h', 'z', 'b', 's'];
console.log(reverseAlpha(reverseAlphabet));// returns ['z', 's', 'l', 'h', 'b'].

/* JavaSctript's default method is by string Unicode point value, which may return unexpected result.
Therefore, it is expected to provide callback function to specify how to sort the array items.
When such callback function, normally called compareFunction, is supplied
the array items are sorted according to the return value of the compareFunction:
if comparedFunction(a, b) returns a value less than 0 for two elements a and b, then a will come before b.
If comparedFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a.
If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then b will remain unchaged.

Use the sort method in the alphabeticalOrder function to sort the elements of  arr in alphabetical order.
The function should return the sorted array.
*/

function alphabeticalOrder(arr) {
    return arr.sort((a, b) => (a === b)? 0
                    : (a > b)? 1
                    : -1);
}
const alphabeticalO = ["a", "d", "c", "a", "z", "g"];
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
console.log(alphabeticalO);

/*Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of  the order of the elements in the original array.
In other words, it mutates the array on place. One way to avoid this is to first concatinate an empty array
to the one being sorted(remember that slice and concat return a new array), then run the sorted method. 

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
function should return a new array, and not mutate the globalArray variable.*/

const globalArray = [5,6,3, 2,9];

function nonMutatingArray(arr) {
    return arr.concat()
                   .sort((a, b) => a - b);
}
console.log(nonMutatingArray(globalArray));

/*
Split a String into an Array Using the split Method

The split method splits a string into an array of strings. It takes an argument for  the delimiter, 
which can be a character to use to break up the string or regular expression.
For example, if the delimiter is a space, you get an array of words, and if the delimiter is 
an empty string, you get an array of each character in the string.

Here are two examples that split one string by space, then another by digits using a regular expression:
 */
const str = 'Hello World';
const bySpace = str.split(' ');
console.log(bySpace);

const otherString = 'How9are7you2today';
const byDigits = otherString.split(/\d/); // ["How", "are", "you", "today"]
console.log(byDigits);// returns ["How", "are", "you", "today"]

/* Since strings are immutable, the split method makes it easier to  work with them. 

Use the split method inside the splitify function to split str into an array of words.
The function should return the array. Note  that the words are not always seperated by spaces, 
and the array should not contain punctuation.*/

function splitify(str) {
    return str.split(/\W/)
}
console.log(splitify("Hello World,I-am code"));
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together to create a string.
It takes an argument for the delimiter that is used to seperate the array elements in the string.

Here's an example:*/

const arrStr = ["Hello", "World"];
const joinStr = arrStr.join(" ");
console.log(joinStr);// returns the string Hello World

/* Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
The function should retain a string. For example, I-like-Star-Wars would be converted to I like Star Wars.
For this challenge, do not use the replace method. */

function sentensify(str) {
    return str.split(/\W/)
                  .join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));
