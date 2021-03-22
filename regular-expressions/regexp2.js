/*          Match All Letters and Numbers
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

*/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

/*
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;*/
let quoteSample4 ="The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result3 = quoteSample4.match(alphabetRegexV2).length;
console.log(result3);

/**         Match Everything But Letters and Numbers
You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
The first match call would return the value ["%"] and the second would return ["!"].

Use the shorthand character class \W to count the number of non-alphanumeric characters in
various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;*/
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetregex = /\W/g;
let resultNoNum = quoteSample5.match(nonAlphabetregex).length;
console.log(resultNoNum);

/*          Match All Numbers
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/; 
let movieResult = movieName.match(numRegex).length;

/*Match All Non-Numbers
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;*/
let movieName1 = "2001: A Space Oddyssey";
let nonNumRegex = /\D/g;
let movieNameResult = movieName1.match(nonNumRegex).length;
console.log(movieNameResult);

/*          Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. Usernames can only use alpha-numeric characters.

2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3. Username letters can be lowercase and uppercase.

4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

/let userCheck = ^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input*/

// let userName1 = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*+|^[a-z]\d\d+$/i;