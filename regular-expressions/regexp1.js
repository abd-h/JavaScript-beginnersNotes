/*Match Letters of the Alphabet
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e]. */

let catStr = "cat";
let batStr = "bat, Bat dart";
let matStr = "mat";
let bgRex = /[a-e]at/g;
console.log(catStr.match(bgRex), batStr.match(bgRex), matStr.match(bgRex));

/*In order, the three match calls would return the values ["cat"], ["bat"], and null.

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.

Your regex alphabetRegex should match 35 items.

Your regex alphabetRegex should use the global flag.

Your regex alphabetRegex should use the case insensitive flag.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
*/

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let quoteResult = quoteSample1.match(alphabetRegex);
console.log(quoteResult);

/*          Match Numbers and Letters of the Alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set. */
let jennyStr = "Jenny8675309";
let jennyRegex = /[a-z0-9)]/gi;
let jennyResult = jennyStr.match(jennyRegex);
console.log(jennyResult);

/*Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line*/

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result1 = quoteSample2.match(myRegex1);
console.log(result1);

/*          Match Single Characters Not Specified
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
    
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line*/
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiu0-9]/gi;
let myResult = quoteSample3.match(myRegex2);
console.log(myResult);

/*          Match Characters that Occur One or More Times

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.*/
let letterS = "Mississippi";
let sRegex = /s+/gi;
let sResult = letterS.match(sRegex);
console.log(sResult);

/*          Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.*/
let soccerWord = "gooooooooale";
let gPhrase = "ggut feeling";
let oPhrase = "Over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

/*In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.


// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);

/*          Find Characters with Lazy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);*/

let text ="<h1>Winter is coming</h1>";
let textRegex = /<[g-h0-1]*?>/;
let textResult = text.match(textRegex);
console.log(textResult);
console.log(textRegex.test(text));

/*          Find One or More Criminals in a Hunt

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:
zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
let reCriminals = /C+/; // Change this line*/

/*          Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

*/
let firstStr = "Ricky is first and can be found";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstStr));
let noFirstStr = "You can't find Ricky now";
console.log(firstRegex.test(noFirstStr));
/*The first test call would return true, while the second would return false.

Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);*/
let rickyAndCal = "Cal and Ricky both racing";
let calRegex = /^Cal/;
let calResult = calRegex.test(rickyAndCal)
console.log(calResult);


/*Match Ending String Patterns
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.*/
let theEnding = "This is never ending story";
let endRegex = /story$/;
console.log(endRegex.test(theEnding));
let notEnding = "This story has to end";
console.log(endRegex.test(notEnding));

/*The first test call would return true, while the second would return false.

Use the anchor character ($) to match the string caboose at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);*/

let caboose = "The last car on a train is caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));