/*          Regular Expressions
Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.*/

/*          Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.*/

let theString = "The Dog chased the Cat";
let theRegex = /The/;
console.log(theRegex.test(theString));
/*The test method here returns true.
Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line*/

let helloString = "Hello welecome to FreeCodeCamp";
let helloRegex = /Hello/;
let helloResult = helloRegex.test(helloString);
console.log(helloResult);//returns true

/*          Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:*/
let myNameStr = "Hi my name's Kevin";
let myNameRegex = /kevin/;
let myNameResult = myNameRegex.test(myNameStr);
console.log(myNameResult);//test returns false

/*A future challenge will show how to match those other forms as well.
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let waldoResult = waldoRegex.test(waldoIsHiding);
console.log(waldoResult);
