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

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);*/

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let fccResult = fccRegex.test(myString1);
console.log(fccResult);

/*          Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:*/
"Hi, this is awesome practice".match(/awesome/);
let yourString = "Regular experassions";
let yourRegex = /experassions/;
let yourResult = yourString.match(yourRegex);
console.log(yourResult);
/*Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
*/
"String".match(/regex/);
/regex/.test("String");

/*          Find More Than the First Match
So far, you have only been able to extract or search a pattern once.*/

let testStr1 = "repeat, Repeat, Repeat";
let testRegex1 = /Repeat/;
console.log(testStr1.match(testRegex1));
//Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the g flag.
let repeatRegex = /Repeat/g;
console.log(testStr1.match(repeatRegex));// returns [Repeat, Repeat, Repeat];

/*Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi*

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line*/

let twinkleStar ="Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
console.log(twinkleStar.match(starRegex));

/*          Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
*/
let humStr = "I'll hum a song.";
let humBear = "I'll hug a bear and then got to Pizza Hut, then ";
let humRegex = /hu./;
humBear.concat(humStr)
console.log(humRegex.test(humBear.concat(humStr))
);
/*Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
*/
let exampleStr = " let's have fun with regular experassion run, sun, fun, pun, nun, and bun.";
let unRegex = /un./;
let unResult = unRegex.test(exampleStr);
console.log(unResult);

/*          Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i,
let myStrFlexy = "please only select words that begin with big, bag, bug and bog";
let flexyRegex = /b[iau]/;
let flexyResult = myStrFlexy.match(flexyRegex);
console.log(flexyResult);
*/
let bag = "bag, bag";
let big = "big";
let bug = "bug";
let bog = "bog";
let flexyRegex = /b[aiu]g/g;
console.log(bag.match(flexyRegex));
console.log(big.match(flexyRegex));
console.log(bug.match(flexyRegex));
console.log(bog.match(flexyRegex));
/* In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
 */
let quoteSample = "Bedware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult);
//.............................................................................................................

