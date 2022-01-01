/*          Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to looke for a number of matches.
They are also used to look for parterns in a specific position in strings.

In earlier challenges, you used the caret character (^) inside a character set to create negated 
character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is 
used to search for patterns at the beginning of strings.*/

let firstStr = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let notFirst = "You can't find Ricky";
console.log(firstRegex.test(firstStr)); // returns true
console.log(firstRegex.test(notFirst)); // returns false

/* Use the caret in a regex to find Cal only in the beginning og the string rickyAndCal. */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let calResult = calRegex.test(rickyAndCal)
console.log(calResult);
console.log(rickyAndCal.match(calRegex));
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        Match Ending String Patterns
In the last challenge, you've learned to use the caret character to search for patterns at the 
beginning of strings. There is also a way to search for patterns at the end of strings.     

You can search the end of strings using dollor sign character $ at the end of  the regex.*/

let theEnding = "This is never ending story";
let notEnding = "Sometimes a story will have to end";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));  // returns true
console.log(storyRegex.test(notEnding)); // returns false

// Use the anchor character ($) to match the string caboose at the end of the string caboose.

let caboose = "The last car on the train is the caboose";
let lastRegex = /caboose$/;
let resultCaboose = lastRegex.test(caboose)
console.log(resultCaboose);
console.log(caboose.match(lastRegex));
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                        Match All Letters and Numbers
Using character classes, you were able to search for all letters of the alphabet with [a-z].
This kind of character class is common enough that there is a shortcut for it, although it includes a few extra
characters as well.

The closest character class in JavaScript to match the alphabet is the \w. This shortcut is equal to 
[A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers.
Note this character class also includes the underscore character (_).
*/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /[\w+]/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));
// All four of these test calls would return true.

// These shortcut character clases are also known as  a shortcut classes.

// Use the shorthand character class \w to count the numbers of  alphanumeric 
// characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let alphaResult = quoteSample.match(alphabetRegexV2);
console.log(alphaResult);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                                            Match Everyting but Letters and Numbers
You've learned that you can use shortcut to match alphanumerics [A-Za-z0-9_] using \w.
A matural pattern you might want to seatch for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite usese a capital letter.
This shortcut is the same as /[^A-Za-z0-9_].*/

let shorthandRegex = /\W/;
let numbersBe = "42%,.*";
let sentenceBe = "Coding!";
console.log(numbersBe.match(shorthandRegex));
console.log(sentenceBe.match(shorthandRegex));
/* The first match call would return the value ["%"] and the second would return ["!"] .

Use shorthand character class \W to count the number of non-alphanumeric characters 
in varioius quotes and strings.*/

let quoteSample3 = "The five boxing wizards jump quickly.";
let nonAlphaRegex = /\W/g;
let nonAlphaResults = quoteSample3.match(nonAlphaRegex).length;
console.log(nonAlphaResults);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;

                                             Match All Numbers
You've learned shorcuts for common string patterns like alphanumerics. 
Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with lowercase letter d.
This is equal to /[0-9]/, which looks for a single character of any number between 0 and 9.

Use the shorthand character class \d to count how many digits are in movie title.
Writen out numbers ("six" instead of 6) do not count.*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let numResult = movieName.match(numRegex).length;
console.log(numResult);

/*Match All Non-Numbers
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.*/