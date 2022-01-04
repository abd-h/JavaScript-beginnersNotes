/*                              Match Whitespace
The challenge so far have covered matching letters of the alphabet and numbers.
You can also match the whitespace or spaces between letters.

You search for whitespace using \s, which is a lowercase s. This pattern not only 
matches whitespace, but also carriage return, tab, form feed, and new line characters.

You can think of it as similar to the character class [\r\t\n\v].*/

let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));
// This match would return [' ', ' '];

// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

let whitespaceSample = "Whitespace is important in sperating words";
let countWhiteSpace = /\s/g;
let countWhitespaceResult = whitespaceSample.match(countWhiteSpace);
console.log(countWhitespaceResult);
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                            Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with lowercase s. You can also
search everything except whitespace. 

Search for non-whitespace using \S, which is an uppercase S. This pattern would not match 
whitespace, carriage return, form feed and new line characters.

You can think of being similar to the character class [\n\t\f\r\v].*/

let notWhitespace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(notWhitespace.match(nonSpaceRegex));

// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let noSpaceSample = "Whitespace is important in sperating words";
let countNonWhiteSpace1 = /\S/g;
console.log(noSpaceSample.match(countNonWhiteSpace1));
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::k

                    Specify Upper and Lower Number of Matches
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look
for zero or more characters. Those are comvenient but sometimes you want to match a certain range
of patterns.

You can specify the lower and upper number of patterns with the quantity specifiers.
Quantity specitiers are used with curly brackets ({and}). You put two numbers between the 
curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appeating beween 3 and five times in the string ah, your regex
would be /a{3,5}h/;
*/
let A4 = "aaaah";
let A2 = "ah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
// The first would return true, while the second would return false.

// Change the regex ohRegex to match the entire phrase oh no when it has 3 to 6 letter h's.

let ohStr = "Ohhhhhh no";
let ohRegex = /Oh{3,6}\sno/;
let ohResult = ohRegex.test(ohStr)
console.log(ohResult); // returns true;
        /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                        Speicify Only the Lower Numger of Matches
You can specify the lower and upper number of patterns with quantity specifiers using 
curly brackets. Sometimes you only want specify the lower number of patterns 
with no upper limit.

To specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appeatring atleat 3 times,
you're regex would be /ha{3,}h/*/

let a4 = "haaaah";
let a2 = "haah";
let a100 = "h" + "a".repeat(100) + "h";
let multiplea = /ha{3,}h/;
console.log(multiplea.test(a4));
console.log(multiplea.test(a2));
console.log(multiplea.test(a100));
// In order, the three test calls would return true, false, and true.

// Change the regex haRegex to match the word Hazzah only when it has four or more latter z's;

let hasStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
let haResult = haRegex.test(hasStr);
console.log(haResult);

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        Specify Exact Number of Matches
You can the lower and upper number of patterns with the quantity specifiers using 
curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that number between the curly brackets.

For example, to match only the word hah with the letter a appearing 3 times, your regex would 
be /ha{3}h/. */

let aA4 = "haaaah";
let aA3 = "haaah";
let aA100 = "h" + "a".repeat(100) + "h";
let multipleHa = /ha{3}h/;
console.log(multipleHa.test(aA4));
console.log(multipleHa.test(aA3));
console.log(multipleHa.test(aA100));

// In order, the three test calls would return false, true, false.

// Change the timRegex to match the word Timber only when it has four letters m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let timResult = timRegex.test(timStr);
console.log(timResult);
