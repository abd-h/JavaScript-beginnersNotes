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

/**     Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. 

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");

explanation is source from:
https://www.freecodecamp.org/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/*/

function confirmEndOf(str, target) {
  if(str.slice(-target.length) === target){
    return true;
  }
  else {
    return false;
  }
}
console.log(confirmEndOf("Congratulation", "on"));
function confirmEnding(str, target) {
  let str1 = str[str.length-1];
  if (str1 === target) {
    return true
  }
  else {
    return false;
  }
}
let n = "m";
console.log(n.indexOf(-1));
console.log(confirmEnding("Congratulation", "on"));

// using endsOf();
function confirmEndingOf(str, target) {
  return str.endsWith(target);
}
console.log(confirmEndingOf("Bastian", "n"));

/**     Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. 

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);*/

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  return str += repeatStringNumTimes(str, num -1)
}
console.log(repeatStringNumTimes("abc", 3));

/**     Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. 

function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);*/
 let truncate = "A-tisket a-tasket A green and yellow basket";
 let strlen = 8;
 totalStr = truncate.substr(0,strlen).concat("...");
 console.log(totalStr);

 function truncateString(str, num){
  
   if (str.length > num) {
     return str.substr(0, num).concat("...");
   } else {
     return str;
   }
   
 }
 console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));

 /**      Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  return num;
}

here:
arr =[1,2,3,4]
and 
func(num) {return num% 2===0}
so the function is same as 
findElement(arr=[1,2,3,4], func(num){return num%2===0;})

The first is an array: [1, 2, 3, 4]
The second is a function: function(num){ return num % 2 === 0; }
What you need to do is return the item in the array that first makes the second argument return true. The second argument returns true or false as shown in the example below.
In other words, return the first item in the array that can be perfectly divided by 2 with no remainder.
Example:
Item 1 in the array is the number 1
So we replace the functions argument (num) with 1
function(1){ return 1 % 2 === 0; }
So does 1 ÷ 2 = 0 and therefore leaves no remainder?
No 1 ÷ 2 = 0.5
So our first argument is not true. And this function will return a true or false statement.

findElement([1, 2, 3, 4], num => num % 2 === 0);*/
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i]) === true) {
      num = arr[i];
     
    }
    else if (func() === 0){
      return undefined;
    }
  }
  return num;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/**Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

function booWho(bool) {
  return bool;
}

; */

function booWho(bool) {
  if (bool=== true || bool === false) {
    return true;
  }
  else {
    return false
  }

}
console.log(booWho(false));
// console.log(Boolean);
 

/**Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot")*/

function titleCase(str) {
   str = str.toLowerCase().split(" ");
  
  
  for (let i = 0; i < str.length; i++){
   str[i] = str[i].charAt("0").toUpperCase() + str[i].slice(1);
  
   
  }
  return str.join(' ');
  
}
console.log(titleCase("I'm a little tea pot"));

let cs = "imnewher";
console.log(cs.slice(2) + cs.slice(1));