/* 1.          Convert Celsius to FahrenheitPassed
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
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 2.         Reverse a String

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
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 3.         Factorialize a Number
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

 4.            Find the Longest Word in a String
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

 5.                Return Largest Numbers in Arrays        
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
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 6.         Confirm the Ending

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
console.log(newstr); // froze
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 7.         Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
    return   (num <= 0)? ""
                 : str+= repeatStringNumTimes(str, num -1);
}
console.log(repeatStringNumTimes("*", 3))        // returns the string ***.
console.log(repeatStringNumTimes("abc", 3))    // returns the string abcabcabc.
console.log(repeatStringNumTimes("abc", 4))    // returns the string abcabcabcabc.
console.log(repeatStringNumTimes("abc", 1))    // returns the string abc.
console.log(repeatStringNumTimes("*", 8))       // returns the string ********.
console.log(repeatStringNumTimes("abc", -2))  // returns an empty string ("").
// The built-in repeat() method should not be used.
// repeatStringNumTimes("abc", 0) should return "";
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 8.           Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string 
length (second argument). Return the truncated string with a ... ending.*/

function truncateString(str, num) {
    // ternary operator
     return   (str.length > num)? str.slice(0,num).concat("...")
                : str;
                // this works the same way
    // if(str.length > num){
    //     return str.slice(0,num).concat("...")
    // }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // returns the string A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); //returns the string Peter Piper....
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // returns the string A-tisket a-tasket A green and yellow basket.
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) // return the string A-tisket a-tasket A green and yellow basket.
console.log(truncateString("A-", 1)) // returns the string A....
console.log(truncateString("Absolutely Longer", 2)) // returns the string Ab....
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 9.         Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes 
a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.*/

// practice
function func(num) {
    return num % 2 === 0;
}
console.log(func(8));

function findElement(arr, func) {
  let num = [];
  arr.forEach(a => (func(a))? num.push(a) : undefined)
  return num[0];
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // returns 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // returns undefined.
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 10.            Boo who

Check if a value is classified as a boolean primitive. 
Return true or false.
Boolean primitives are true and false.*/

function booWho(bool) {
  return bool === true || bool === false;
}
console.log(booWho(true)); //returns true.
console.log(booWho(false)); //return true.
console.log(booWho([1, 2, 3])); //return false.
console.log(booWho([].slice)); //return false.
console.log(booWho({ "a": 1 })); //return false.
console.log(booWho(1)); // return false.
console.log(booWho(NaN)); // return false.
console.log(booWho("a")); // return false.
console.log(booWho("true"))//return false.
console.log(booWho("false")) // return false.
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 11.                Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the 
word is in lower case.

For the purpose of this exerc*/

function titleCase(str) {
  return str
                .toLowerCase()
                .split(" ").map(a => a[0].toUpperCase().concat(a.slice(1)))
                .join(" ");
}
console.log(titleCase("I'm a little tea pot")) //returns a string.
console.log(titleCase("I'm a little tea pot")) //returns the string I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt")) //returns the string Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) // returns the string Here Is My Handle Here Is My Spout.
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 12.      Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n){
    let array2 = arr2.slice()
    array2.splice(n,0, ...arr1)
    return array2; 
}
console.log(frankenSplice([1,2,3], [4,5,6], 1)); // returns [4, 1, 2, 3, 5, 6]
console.log(frankenSplice([1, 2, 3], [4, 5], 1)) // returns [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1)) // returns ["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", 
"toes"], 2)) // returns ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
//All elements from the first array should be added to the second array in their original order. 
console.log(frankenSplice([1, 2, 3, 4], [], 0)) // returns [1, 2, 3, 4].
//The first array should remain the same after the function runs.
//The second array should remain the same after the function runs.
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 13.     Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

function bouncer(arr) {

    return arr.filter(x => Boolean(x));
}
console.log(bouncer([7, "ate", "", false, 9])) // returns [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])) //returns ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""]))// returns [].
console.log(bouncer([null, NaN, 1, 2, undefined]))// returns [1, 2].
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 14.      Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into 
an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it 
will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/

function getIndexToIns(arr, num) {
  let arr2 = arr.concat(num).sort((a, b) => (a === b)? 0 :(a > b)? 1 : -1).indexOf(num)
  return arr2;
}
console.log(getIndexToIns([40, 60], 50)); // returns 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // returns 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))// returns a number.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))// returns 2.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // return sa number.
console.log(getIndexToIns([40, 60], 50)) // returns 1.
console.log(getIndexToIns([40, 60], 50))// returns a number.
console.log(getIndexToIns([3, 10, 5], 3))// returns 0.
console.log(getIndexToIns([3, 10, 5], 3)) //  returns a number.
console.log(getIndexToIns([5, 3, 20, 3], 5)) //returns 2.
console.log(getIndexToIns([5, 3, 20, 3], 5)) //returns a number.
console.log(getIndexToIns([2, 20, 10], 19)) // returns 2.
console.log(getIndexToIns([2, 20, 10], 19)) // returns a number.
console.log(getIndexToIns([2, 5, 10], 15)) // returns 3.
console.log(getIndexToIns([2, 5, 10], 15)) // return a number.
console.log(getIndexToIns([], 1)) // returns 0.
console.log(getIndexToIns([], 1)) // return a number.
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 15.     Mutations

Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in 
the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does 
not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {
    return arr[1]
                        .toLowerCase()
                        .split("")
                        .every(i => arr[0].toLowerCase().split("").indexOf(i) != -1)
}
console.log(mutation(["Hello", "hay"])) // returns false.;
console.log(mutation(["hello", "Hello"])); // returns true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"])); // returns true
console.log(mutation(["Mary", "Aarmy"])); // returns true
console.log(mutation(["Alien", "line"])); // returns true
console.log(mutation(["Alien", "line"])); // returns true
console.log(mutation(["floor", "for"])); // returns true
console.log(mutation(["hello", "neo"])); // returns false
console.log(mutation(["voodoo", "no"]));// returns false
console.log(mutation(["ate", "date"])); // returns false
console.log(mutation(["Tiger", "Zebra"])); // returns false
console.log(mutation(["Noel", "Ole"])); // returns true
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 16.      Chunky Monkey
Write a function that splits an array (first argument) into groups 
the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  if(arr.length <= size){
    return [arr]
  }
  else {
    return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
  }
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
