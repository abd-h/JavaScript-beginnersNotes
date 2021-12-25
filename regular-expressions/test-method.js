/* Using the Test Method

Regular expressions are used in programming languages to match parts of string.
You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use t
he following regular expressions: /the/. Notice that quote marks are not required within 
the regular expression.

JavaSctipt has multiple ways to use regexes. One way to test a regesx is using the .test() method.
The .test() method takes the regex, applies it to string(which is placed inside the parentheses),
and returns true or false if your pattern finds something or not.*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr)); // returns true

/*                             ********** 
                                Challenge One
                                **********

Apply the regex myRegex on the myString using the .test() method. 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line*/

// Answer
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString)


/*          Matching Literal Strings 
In the last challeng, you seached for the word Hello using the regular expression /Hello/. 
That regex searched for a literal match of the string Hello. Here's another example searching 
for a literal match of the string kevin
*/
let testStr2 = "Hello, my name is Kevin";
let testRegex2 = /Kevin/;
console.log(testRegex2.test(testStr2));// This test result will return true

// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.
let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr2)); // This test call will return false.
/* 
A future challeng will show how to match those other forms as well.

Complete the regex waldoRegex to find  "Waldo" in the string waldoIsHiding with the literal match. 

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

Answer:*/

let waldoIsHiding =  "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let waldoResult = waldoRegex.test(waldoIsHiding)

/*
Matching a Literal String with Different Possibility

Using regexes like /coding/, you can look for a the pattern coding in another string. 

This is powerful to search for single strings, but is limited to only one pattern. You can 
search for multiple for multiple patterns using the alternation or OR operator: |.

This operator operator matches patterns either before or after it. If you wanted to 
match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns
with more OR operators seperating them, like /yes|no|maybe/.

                                ********** 
                                Challenge Two 
                                **********
    Complete the regex petRegex to match the pets dog, cat, bird or fish.
    let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);                         
*/

// answer

let petString = "James has pet cat."
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
console.log(petResult);

/*
Ignor Case While Matching
Up until now, you looked at regexes to do literal matches of strings. But sometimes, you 
might want to also match case differences.

Case(or sometimes letter case) is difference between uppercase letters and lowercase letters.
Example of uppercase are A,B, and C. Example of lowercase are a,b,c.

You can match both cases with what is called a flag. There are other flags but here you'll focus on the flag
that ignor case - the i flag. You can use it by appending it to the regex. An example of using this flag is
/ignorecase/i. This regex can match the strings ignorcase, igNoreCase, and Ignore
case.
                                ********** 
                                Challenge Three
                                **********
Write a regex fccRegex to match freeCodeCamp, no matter it's case.
Your regex should not match any abbreviations with spaces.                              
    */
   let fccStr = "freeCodeCamp";
   let fccRegex = /freecodecamp/i;
   let fccResult = fccRegex.test(fccStr);
   console.log(fccResult);