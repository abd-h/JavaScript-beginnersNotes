/**         Basic Algorithm Scripting
 * 
 * An algorithm is a series of step-by-step instructions that describe how to do something.

To write an effective algorithm, it helps to break a problem down into smaller parts, and think carefully 
about how to solve each part with code.

In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything 
from converting temperatures to handling complex 2D arrays.

            1.  Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
 */
function convertToF(celsius) {
    let fahrenheit = (celsius* (9 / 5)) + 32;
    return fahrenheit;
}
console.log(convertToF(30));


/**         2.  Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

function reverseString(str) {
  return str;
}

reverseString("hello");

 */
function reverseString(str) {
return       str
            .split("")
            .reverse()
            .join("");
}
console.log(reverseString("Hello"));

console.log(
    "hello".
    split("")
    .reverse()
    .join(""));

/**Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  return num;
}

factorialize(5);*/    

function factorialize(num) {
    let number =1;
    if (num < 1){
        return 1;
    }
    else {
        number = num * factorialize(num -1);
    }
    return number;
}
console.log(factorialize(5));

/**             Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");*/

function findLongestWordLength(str) {
    let words = str.split(" ");
    let maxLength = 0;

    for (let i = 0; i < words.length; i++)  {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
   return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/**         Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/
function largestOfFour(arr) {
    let biggestNumber = [0, 0, 0, 0];
    for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++){
        let biggerNum = arr[arrayIndex][0];
        for (let subArrays = 0; subArrays < arr[arrayIndex].length; subArrays++){
            if (arr[arrayIndex][subArrays] > biggerNum[subArrays]) {
                biggerNum= arr[arrayIndex][subArrays]
            }
        }
        biggestNumber[arrayIndex] = biggerNum;
    }
    return biggestNumber;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [0, -1, -12, -14]]));