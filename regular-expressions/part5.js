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