/**         Match Whitespace
The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]. */
let whiteSpace = "Whitespace. Whitespace everywhere";
let whitespace = "Whitespace is important in separating words"
let spaceRegex = /\s/g;
let noSpace = /\s\w\D.+/g;
console.log(whiteSpace.match(spaceRegex));
console.log(whitespace.match(spaceRegex).length);
console.log(whiteSpace.match(noSpace));

/**         Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v]. */

let nonWhitespace = "Whitespace. Whitespace everywhere!";
let nonWhitespaceRegex = /\S/g;
let nwsResult = nonWhitespace.match(nonWhitespaceRegex).length;
console.log(nwsResult);

/**Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string. */
let nwsSample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let countNonWhiteSpaceResult = nwsSample.match(countNonWhiteSpace).length;
console.log(countNonWhiteSpaceResult);

/**         Specify Upper and Lower Number of Matches
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

 */
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
/**Change the regex ohRegex to match the entire phrase 
 * Oh no only when it has 3 to 6 letter h's. */
let ohnoStr = "Ohhh no";
let ohnoRegex = /Oh{3,6}\sno/;
let ohnoResult = ohnoRegex.test(ohnoStr);
console.log(ohnoResult);

/**         Specify Only the Lower Number of Matches
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.*/

let A4Str = "haaaah";
let A2Str = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA1 = /ha{3,}h/;
console.log(multipleA1.test(A4Str));
console.log(multipleA1.test(A2Str));
console.log(multipleA1.test(A100));
/**Change the regex haRegex to match the word 
 * Hazzah only when it has four or more letter z's. */

let haStr = "Hazzzzah";
let haRegex = /z{4,}a/g;
let haResult = haRegex.test(haStr);
console.log(haResult);

/**         Specify Exact Number of Matches
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/. */
let iA4 = "haaaah";
let A3 = "haaah";
let iA100 = "h" + "a".repeat(100) + "h";
let multipleHa = /ha{3}h/;
console.log(multipleHa.test(iA4));
console.log(multipleHa.test(A3));
console.log(multipleHa.test(iA100));
//In order, the three test calls would return false, true, and false.
//Change the regex timRegex to match the word Timber only when it has four letter m's.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let timResult = timRegex.test(timStr);
console.log(timResult);

/**         Check for All or None
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings. */
let american = "color";
let english = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(english));
//Both uses of the test method would return true.

/**Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word. */
let favWord = "favourite";
let favRegex = /favou?rite/;
console.log(favRegex.test(favWord)); // returns true

/**         Positive and Negative Lookahead
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help. */

let quit = "qu";
let noquit = "qt";
let qregex = /q(?=u)/g;
let noqregex = /q(?!u)/g;
console.log(quit.match(qregex));
console.log(noquit.match(noqregex));

/**Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number: */
let password1 = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password1));

/**Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits. */
let samplePassword = "astronout";
let pwRegex = /(?=\w{6,})(?=\D\*\d{2}) /;
let pwResult = pwRegex.test(samplePassword);
console.log(pwResult);

/*          Check For Mixed Grouping of Characters
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.
*/
let testStr = "Pumpkin";
let testRegex = /p(umpk|engu)in/gi;
console.log(testRegex.test(testStr));
/**The test method here would return true.

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
 */
let myStr = "Eleanor Roosevelt";
let myRegex1 = /(Franklin|Eleanor).*Roosevelt/;
let myNewResult = myRegex1.test(myStr);
console.log(myNewResult);

/**     Reuse Patterns Using Capture Groups
Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space: */

let repeatStr = "regex regex regex";
let repeatRegex = /(\w+)\s\1.+/g;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));

/**Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces. */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/g;
let reResult = reRegex.test(repeatNum);
console.log(reResult);
console.log(repeatNum.match(reRegex));
