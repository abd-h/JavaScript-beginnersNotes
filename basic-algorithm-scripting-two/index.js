/*Convert Celsius to FahrenheitPassed
The algorithm to convert from Celsius to Fahrenheit is the temperature 
in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit 
temperature equivalent to the given Celsius temperature. Use the algorithm 
mentioned above to help convert the Celsius temperature to Fahrenheit.*/

function convertToF(celsius) {
    let fahrenheit = (celsius * 9) / 5 +  32;
    return fahrenheit;
}

console.log(convertToF(0)); //  should return a number
console.log(convertToF(-30)); // return a value of -22
console.log(convertToF(-10)); // return a value of 14
console.log(convertToF(0));  //return a value of 32
console.log(convertToF(20));  // return a value of 68
console.log(convertToF(30));  // return a value of 86
/*....................................................................................................

Reverse a String

            Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.*/

function reverseString(str) {   
  return str.split("") 
                .reverse( )
                .join("");
}

console.log(reverseString("hello"));
console.log(reverseString("hello")); // returns a string.
console.log(reverseString("hello")); // returns the string olleh.
console.log(reverseString("Howdy") );// returns the string ydwoH.
console.log(reverseString("Greetings from Earth")); // returns the string htraE morf sgniteerG.
/*...........................................................................................................

Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.*/
function factorialize(num) {
  if(num === 0){
      return 1;
  }
  else {
      return num * factorialize(num - 1);
  }
}
console.log(factorialize(5));//returns a number.
console.log(factorialize(5)); //returns 120.
console.log(factorialize(10)); // returns 3628800.
console.log(factorialize(20)); // returns 2432902008176640000.
console.log(factorialize(0)); // returns 1
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

            Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str){
    str = str.split(" ").reduce((accumilator, currentValue) => 
    (accumilator.length > currentValue.length)? accumilator 
    : currentValue  )
    return str.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // returns a number.
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // returns 6
console.log(findLongestWordLength("May the force be with you")); // returns 5
console.log(findLongestWordLength("Google do a barrel roll")); // returns 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // returns 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // returns 19
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Return Largest Numbers in Arrays        
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i].*/

function largestOfFour(arr){
    let arr1 = [];
    arr.map(a => arr1.push(Math.max(...a)))
    return  arr1         
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //returns Array
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //returns [ 5, 27, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));//returns [9, 35, 97, 1000000].
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // returns [25, 48, 21, -3].
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Confirm the EndingPassed
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
 return str.substr(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n")); // returns true
console.log(confirmEnding("Congratulation", "on")); // returns true
console.log(confirmEnding("Connor", "n")); // returns false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // returns  false
console.log(confirmEnding("He has to give me a new name", "name")); // returns true
console.log(confirmEnding("Open sesame", "same")); // returns true;

let str1 = "Walking on water and developing software from a specification are easy if both are frozen";
let target = "frozen"
let newstr = str1.substr(-target.length)
console.log(newstr);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Repeat a String Repeat a StringPassed
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
  let string = "";
  for(let i = 0; i <= num; i++){
  string += str[i].concat(str[i]) + str[i]
  return string
  }
  return string
}
console.log(repeatStringNumTimes("*", 3));
