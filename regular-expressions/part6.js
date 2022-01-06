/*          Check for All or Non
Sometimes the patterns you want to seatch for may have parts of it that may or
may not exist. However, it may be important to check for them nonetheless.

You can specify the possiple existance of an element with a question mark, ?.

This checks for zero or one of the proceding element. You can think of this symbol as 
the previous element is optional.

For example, there are slight differences in American and British English and you can use the 
question mark to match both spellings.*/

let american = "color";
let english = "colour";
let rainbowRegex = /colou?/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(english));

// Change the regex favRegex to match both the American English (favorite) and the 
// british English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/
let favResult = favRegex.test(favWord);
console.log(favResult);
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Positive and Negative Lookahead
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check 
for patterns further a long. This can be useful when you want to search for multiple 
patterns over the same string.

There are two kind of lookheads: positive lookaheads and negative lookaheads.

A positive lookaheads will look to make sure the elelment in the search pattern is there,
but won't actually match it. A positive lookaheads is used as (?=...) where the ... is the required part 
that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern 
is not there. A negative lookahead is used as (?!...) where ... is the pattern that you do not want to be there. The rest of the pattern is return if the negative lookahead is not present.

Lookaheads are a bit confusing but some examples will help.*/

let quit = "qu";
let notquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
// console.log(notquit.match(qRegex));
/*  Both of these match calls would return [q].

A more practical use of lookaheads is to check two or more patterns in one string.
Here is a (naively) simple password checker that looks for between 3 and 6 character
and at least one number
*/
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));// returns true
/*  
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits*/

let sampleWord = "astr1on11aut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})(?!\d{5,})/;
let pwResult = pwRegex.test(sampleWord);
console.log(pwResult);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
                                            Check for Mixed Grouping of Characters
Sometimes we want to check for group of characters using a Regular Expression 
and to achieve that we use parentheses ().

If you want find either Penguin or Pumkin in a string, you can use the following Regular Expression:
/P/(umk|ungu)in/g.

Then check whether the desired string is in the test string by using the test() method.*/

let testStr = "Pumpkin";
let testRegex = /P(umpk|engu)in/;
console.log(testRegex.test(testStr));
/* The test here would return true

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in
a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either
true or false is returned depanding on whether the regex matches.*/

let myStr = "Eleanor Roosevelt";
let strRegex = /(franklin|franklin\s\w\W*)roosevelt|(ELeanor\s|Eleanor\s\w\W*\s)roosevelt/gi
let myResult = strRegex.test(myStr);

console.log("..........................................................");
console.log(myResult); // returns true
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                                            Reuse Patterns Using Capture Groups
Say you want match a word that occurs multiple times like below.

let repeatStr = "row row row";
You could use /row row row/; but what if you don't know the specific word repeated?
Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be capture in parentheses.
In this case, the goal is to capture a word consisting of alphanumeric characters so the 
capture group will be \w+ enclosed by parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which can be accessed within 
the same regex using a backslash and the number of the capture group (e.g. \1). Capture group are 
automatically numbered by the position of their opening parentheses(left to right), starting at 1.

The example below matches a word that occurs thrice seperated by spaces:*/

let repeatStr = "row row row";
let repeated = /(\w+) \1 \1/;
console.log(repeated.test(repeatStr)); // rerurns true;
console.log(repeatStr.match(repeated)); // returns ["row row row", "row"]
/* Using the .match() method on a string will return an array with the matched substring, along with its 
captured groups.

Use captured groups in reRegex to match a string that contains of only the same number repeated exactly 
three times seperated by single spaces.*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g;
let reResult = reRegex.test(repeatNum);
console.log(reResult);
console.log(repeatNum.match(reRegex));
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
                                            Use Capture Groups to Search and Replace
Searching is useful. However, you can make searching even more powerful when it also 
changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on string. The inputs for .replace() is 
first the regex pattern you want to search for. The second parameter is the string to replace the match or 
function to do something.*/

let wrongText = "The sky is silver";
let silverRegex = /silver/;
let rightText = wrongText.replace(silverRegex, "Blue");
console.log(rightText); // returns "The sky is blue"

// You can also access capture groups in the replacement string with dolor sign ($).
let oldText = "Code Camp";
let oldRegex = /(\w+)\s(\w+)/
let newText = oldText.replace();
console.log(oldRegex.test(oldText));
console.log(oldText.match(oldRegex));
console.log("______________________________________");
let newTxt = oldText.replace(oldRegex, "$2 $1");
console.log(newTxt);// The replace call would return the string Camp Code.

/*  Write a regex fixRegex using three capture groups that will search for word in the 
string one two three. Then update the replaceText variable to replace one two three
with the string three two one and assign the result to the result variable. Make sure you are 
you are utilazing capture groups in the replacement string using the dollar sign ($) syntax. */

let str1 = "One Two Three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText2 = "$3 $2 $1"
let replaceText1 = str1.replace(fixRegex, replaceText2);
console.log(replaceText1);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        Remove Whitespace from Start and End
Sometimes whitespace characters around strings are not wanted but are there.
Typical processing of string is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string mothods to remove whitespace at the 
beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this 
challenge using regular expressions.*/

let hello =  "   Hello, World!  ";
let wsRegex = /^(\s+)(\w+)(\w\D+)(\s)\s$/;
let wsResult = hello.replace(wsRegex, "$2$3")
console.log(hello);
console.log(wsResult);
