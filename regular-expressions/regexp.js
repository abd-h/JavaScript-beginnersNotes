/*          Regular Expressions
Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.               



            Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.*/

let testStr = "FreeCodeCamp";
let testRegex = /Code/; 
console.log(testRegex.test(testStr));
/*The test methode here returns true;

Apply the regex myRegex on the string myString using the .test() method. 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line */
let myString = "Hello World";
let myRegex = /Hello /;
let result = myRegex.test(myString);
console.log(result);

/*          Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:*/
let testMyStr = "Hello My Names Kevin";
let testMyRegex = /Kevin/;
console.log(testMyRegex.test(testMyStr));

/*This test call will return true.

Any other forms of Kevin will not match. For example, 
the regex /Kevin/ will not match kevin or KEVIN.*/
let wrongRegex = /keven/;
let wrongResult = wrongRegex.test(myString);
console.log(wrongResult);
// This test call will return false;

/* future challenge will show how to match those other forms as well.

Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
*/
let waldoIsHiding = "somewhere Waldo is hiding this text.";
let waldoRegex = /Waldo/;
let WaldoResult  = waldoRegex.test(waldoIsHiding);
console.log(WaldoResult);

/*          Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
*/

let petString = "James has  a pet.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
console.log(petResult);

/*          Ignore Case While Matching
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/